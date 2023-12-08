import type { MaybeNullish } from '@rhao/types-base'
import { getFileTypeByExtname } from './getFileTypeByExtname'

/**
 * 解析 Content-Disposition
 * @param contentDisposition 响应报文的 contentDisposition 属性
 *
 * @example
 * ```ts
 * const contentDisposition = 'attachment; filename="example.pdf"; filename*=UTF-8\'\'example%20%E6%B5%8B%E8%AF%95.pdf';
 *
 * const { rawFilename, filename, extname } = parseContentDisposition(contentDisposition)
 *
 * console.log(rawFilename, filename, extname)
 * // rawFilename => example%20%E6%B5%8B%E8%AF%95.pdf
 * // filename => example 测试.pdf
 * // extname => .pdf
 * ```
 */
export function parseContentDisposition(contentDisposition: string) {
  const pattern = /filename=['"]?([^'"]+)['"]?(?:;\s*filename\*=['"]?(?:[\w-]+'+)([^'"]+)['"]?)?/
  const match = contentDisposition.match(pattern)

  let rawFilename: string | null = null
  let filename: MaybeNullish<string> = null
  let filetype: MaybeNullish<string> = null
  let extname: MaybeNullish<string> = null

  if (match) {
    rawFilename = match[2] || match[1] || ''
    filename = decodeURIComponent(rawFilename)
    extname = filename.slice(filename.lastIndexOf('.'))
    filetype = getFileTypeByExtname(extname)
  }

  return { rawFilename, filename, filetype, extname }
}

if (import.meta.vitest) {
  it('基础功能', () => {
    const contentDisposition = 'attachment; filename="example.pdf"; filename*=UTF-8\'\'example%20%E6%B5%8B%E8%AF%95.pdf'
    const { rawFilename, filename, filetype, extname } = parseContentDisposition(contentDisposition)
    expect(rawFilename).toBe('example%20%E6%B5%8B%E8%AF%95.pdf')
    expect(filename).toBe('example 测试.pdf')
    expect(filetype).toBe('application/pdf')
    expect(extname).toBe('.pdf')
  })
}
