import { fileTypeAndExtNamePairs } from './_fileTypeAndExtNamePairs'

/**
 * 根据文件类型获取扩展名列表
 * @param fileType 文件类型
 *
 * @example
 * ```ts
 * console.log(getExtNameByFileType(''))
 * // => []
 *
 * console.log(getExtNameByFileType('image/png'))
 * // => ['.png']
 *
 * console.log(getExtNameByFileType('image/jpeg'))
 * // => ['.jpeg', '.jpg', '.jpg2']
 * ```
 */
export function getExtNameByFileType(fileType: string) {
  const [_, names = []] = fileTypeAndExtNamePairs.find(([type]) => type === fileType) || []
  return names
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(getExtNameByFileType('')).toStrictEqual([])
    expect(getExtNameByFileType('image/png')).toStrictEqual(['.png'])
    expect(getExtNameByFileType('text/html')).toStrictEqual(['.html', '.shtml', '.htm'])
  })
}
