import { fileTypeAndExtnamePairs } from './_fileTypeAndExtnamePairs'

/**
 * 根据文件类型获取扩展名列表
 * @param fileType 文件类型
 *
 * @example
 * ```ts
 * console.log(getExtnameByFileType(''))
 * // => []
 *
 * console.log(getExtnameByFileType('image/png'))
 * // => ['.png']
 *
 * console.log(getExtnameByFileType('image/jpeg'))
 * // => ['.jpeg', '.jpg', '.jpg2']
 * ```
 */
export function getExtnameByFileType(fileType: string) {
  const [_, names = []] = fileTypeAndExtnamePairs.find(([type]) => type === fileType) || []
  return names
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(getExtnameByFileType('')).toStrictEqual([])
    expect(getExtnameByFileType('image/png')).toStrictEqual(['.png'])
    expect(getExtnameByFileType('text/html')).toStrictEqual(['.html', '.shtml', '.htm'])
  })
}
