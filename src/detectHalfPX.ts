import { resolveClientRunProfile } from './clientRun'
import { getDpr } from './getDpr'
import { isClient } from './isClient'

/**
 * 检测是否支持 0.5px
 *
 * ***原理：根据浏览器是否会以某种方式渲染亚像素***
 */
export function detectHalfPX() {
  if (!isClient) return false

  const { document } = resolveClientRunProfile()
  const dpr = getDpr()
  const docEl = document.documentElement

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'

    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)

    if (testElement.offsetHeight === 1) return true

    docEl.removeChild(fakeBody)
  }

  return false
}
