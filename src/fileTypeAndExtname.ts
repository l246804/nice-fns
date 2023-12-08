import { fileTypeAndExtnamePairs } from './_fileTypeAndExtnamePairs'

export type FileType = string
export type Extname = string
export type FileTypeAndExtnamePairs = [filetype: FileType, names: Extname[]][]

/**
 * 追加文件类型和扩展名成对列表，文件类型相同时后追加优先级更高
 * @param pairs 文件类型和扩展名成对列表
 *
 * @example
 * ```ts
 * appendFileTypeAndExtnamePairs(
 *   [
 *     ['image/png', '.png'],
 *     ['text/html', ['.html', '.htm']],
 *   ],
 * )
 * ```
 */
export function appendFileTypeAndExtnamePairs(pairs: FileTypeAndExtnamePairs) {
  pairs.forEach((item) => {
    fileTypeAndExtnamePairs.unshift(item)
  })
}

/**
 * 是否存在指定文件类型和扩展名成对项
 * @param fileType 文件类型
 * @param extname 扩展名
 *
 * @example
 * ```ts
 * // 根据文件类型查找
 * hasFileTypeAndExtnamePairs('image/png')
 * // => true
 *
 * // 根据扩展名查找
 * hasFileTypeAndExtnamePairs('', '.gif')
 * // => true
 * ```
 */
export function hasFileTypeAndExtnamePairs(fileType: FileType = '', extname: Extname = '') {
  if (!fileType && !extname) return false
  return fileTypeAndExtnamePairs.some(([type, names]) => {
    return type === fileType || names.includes(extname)
  })
}

if (import.meta.vitest) {
  it('基础功能', () => {
    appendFileTypeAndExtnamePairs([['application/vnd.oasis.opendocument.text', ['.odt']]])
    expect(hasFileTypeAndExtnamePairs('application/vnd.oasis.opendocument.text')).toBe(true)
    expect(hasFileTypeAndExtnamePairs('', '.odt')).toBe(true)
  })
}
