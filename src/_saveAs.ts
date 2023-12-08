import { isClient } from './isClient'

function download(url: string, name: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    saveAs(xhr.response, name)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function corsEnabled(url: string) {
  const xhr = new XMLHttpRequest()
  // use sync to avoid popup blocker
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
  }
  catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click(node: Element) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  }
  catch (e) {
    const evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null,
    )
    node.dispatchEvent(evt)
  }
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
const isMacOSWebView
  = isClient
  && /Macintosh/.test(navigator.userAgent)
  && /AppleWebKit/.test(navigator.userAgent)
  && !/Safari/.test(navigator.userAgent)

export function saveAs(
  blob: Blob | string,
  name = '',
  popup: Window | null = null,
) {
  if (!isClient) return

  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
  if ('download' in HTMLAnchorElement.prototype && !isMacOSWebView) {
    const a = document.createElement('a')
    name = name || (blob as any).name || 'download'

    a.download = name
    a.rel = 'noopener' // tabnabbing

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) return download(blob, name)

        a.target = '_blank'
      }
      click(a)
    }
    else {
      // Support blobs
      a.href = URL.createObjectURL(blob)
      setTimeout(() => {
        URL.revokeObjectURL(a.href)
      }, 4e4) // 40s
      setTimeout(() => {
        click(a)
      }, 0)
    }
  }
  else {
    // Fallback to using FileReader and a popup
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank')
    if (popup) popup.document.title = popup.document.body.innerText = 'downloading...'

    if (typeof blob === 'string') return download(blob, name)

    const force = blob.type === 'application/octet-stream'
    const isSafari = /Safari/.test(navigator.userAgent)
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

    if (
      (isChromeIOS || (force && isSafari) || isMacOSWebView)
      && typeof FileReader !== 'undefined'
    ) {
      // Safari doesn't allow downloading of blob URLs
      const reader = new FileReader()
      reader.onloadend = function () {
        let url = reader.result as string
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
        if (popup) popup.location.href = url
        else location.href = url
        popup = null // reverse-tabnabbing #460
      }
      reader.readAsDataURL(blob)
    }
    else {
      const url = URL.createObjectURL(blob)
      if (popup) popup.location = url
      else location.href = url
      popup = null // reverse-tabnabbing #460
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 4e4) // 40s
    }
  }
}
