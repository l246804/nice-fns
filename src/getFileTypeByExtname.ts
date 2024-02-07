import { fileTypeAndExtNamePairs } from './_fileTypeAndExtNamePairs'

/**
 * 根据扩展名获取常用文件类型
 * @param extName 扩展名
 *
 * @example
 * ```ts
 * console.log(getFileTypeByExtName(''))
 * // => undefined
 *
 * console.log(getFileTypeByExtName('png'))
 * // => 'image/png'
 *
 * console.log(getFileTypeByExtName('.html'))
 * // => 'text/html'
 * ```
 */
export function getFileTypeByExtName(extName: string) {
  extName = `.${extName.replace(/^\./g, '')}`
  return fileTypeAndExtNamePairs.find(([_, names]) => names.includes(extName))?.[0]
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(getFileTypeByExtName('')).toBe(undefined)
    expect(getFileTypeByExtName('png')).toBe('image/png')
    expect(getFileTypeByExtName('.htm')).toBe('text/html')
  })
}
