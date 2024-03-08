import { getFileTypeByExtName } from './getFileTypeByExtName'

/**
 * 解析 Content-Disposition
 * @param contentDisposition 响应报文的 contentDisposition 属性
 * @param keyword 解析关键词
 *
 * @example
 * ```ts
 * const contentDisposition = 'attachment; filename="example.pdf"; filename*=UTF-8\'\'example%20%E6%B5%8B%E8%AF%95.pdf';
 *
 * const { rawFilename, filename, extName } = parseContentDisposition(contentDisposition)
 *
 * console.log(rawFilename, filename, extName)
 * // rawFilename => example%20%E6%B5%8B%E8%AF%95.pdf
 * // filename => example 测试.pdf
 * // extName => .pdf
 * ```
 */
export function parseContentDisposition(contentDisposition: string, keyword = 'filename') {
  const pattern = new RegExp(
    `${keyword}=['"]?([^'";]+)['"]?(?:;\\s*${keyword}\\*=['"]?(?:[\\w-]+'+)([^'"]+)['"]?)?`,
  )
  const match = contentDisposition.match(pattern)

  let rawFilename: string | undefined
  let filename: string | undefined
  let filetype: string | undefined
  let extName: string | undefined

  if (match) {
    rawFilename = match[2] || match[1] || ''
    filename = decodeURIComponent(rawFilename)
    extName = filename.slice(filename.lastIndexOf('.'))
    filetype = getFileTypeByExtName(extName)
  }

  return { rawFilename, filename, filetype, extName }
}

if (import.meta.vitest) {
  it('基础功能', () => {
    const contentDisposition
      = 'attachment; filename="example.pdf"; filename*=UTF-8\'\'example%20%E6%B5%8B%E8%AF%95.pdf'
    const { rawFilename, filename, filetype, extName } = parseContentDisposition(contentDisposition)
    expect(rawFilename).toBe('example%20%E6%B5%8B%E8%AF%95.pdf')
    expect(filename).toBe('example 测试.pdf')
    expect(filetype).toBe('application/pdf')
    expect(extName).toBe('.pdf')
  })
}
