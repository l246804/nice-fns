import { fileTypeAndExtNamePairs } from './_fileTypeAndExtNamePairs'

export type FileType = string
export type ExtName = string
export type FileTypeAndExtNamePairs = [filetype: FileType, names: ExtName[]][]

/**
 * 追加文件类型和扩展名成对列表，文件类型相同时后追加优先级更高
 * @param pairs 文件类型和扩展名成对列表
 *
 * @example
 * ```ts
 * appendFileTypeAndExtNamePairs(
 *   [
 *     ['image/png', '.png'],
 *     ['text/html', ['.html', '.htm']],
 *   ],
 * )
 * ```
 */
export function appendFileTypeAndExtNamePairs(pairs: FileTypeAndExtNamePairs) {
  pairs.forEach((item) => {
    fileTypeAndExtNamePairs.unshift(item)
  })
}

/**
 * 是否存在指定文件类型和扩展名成对项
 * @param fileType 文件类型
 * @param extName 扩展名
 *
 * @example
 * ```ts
 * // 根据文件类型查找
 * hasFileTypeAndExtNamePairs('image/png')
 * // => true
 *
 * // 根据扩展名查找
 * hasFileTypeAndExtNamePairs('', '.gif')
 * // => true
 * ```
 */
export function hasFileTypeAndExtNamePairs(fileType: FileType = '', extName: ExtName = '') {
  if (!fileType && !extName) return false
  return fileTypeAndExtNamePairs.some(([type, names]) => {
    return type === fileType || names.includes(extName)
  })
}

if (import.meta.vitest) {
  it('基础功能', () => {
    appendFileTypeAndExtNamePairs([['application/vnd.oasis.opendocument.text', ['.odt']]])
    expect(hasFileTypeAndExtNamePairs('application/vnd.oasis.opendocument.text')).toBe(true)
    expect(hasFileTypeAndExtNamePairs('', '.odt')).toBe(true)
  })
}
