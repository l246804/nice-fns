import { fileTypeAndExtnamePairs } from './_fileTypeAndExtnamePairs'

/**
 * 根据扩展名获取常用文件类型
 * @param extname 扩展名
 *
 * @example
 * ```ts
 * console.log(getFileTypeByExtname(''))
 * // => undefined
 *
 * console.log(getFileTypeByExtname('png'))
 * // => 'image/png'
 *
 * console.log(getFileTypeByExtname('.html'))
 * // => 'text/html'
 * ```
 */
export function getFileTypeByExtname(extname: string) {
  extname = `.${extname.replace(/^\./g, '')}`
  return fileTypeAndExtnamePairs.find(([_, names]) => names.includes(extname))?.[0]
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(getFileTypeByExtname('')).toBe(undefined)
    expect(getFileTypeByExtname('png')).toBe('image/png')
    expect(getFileTypeByExtname('.htm')).toBe('text/html')
  })
}
