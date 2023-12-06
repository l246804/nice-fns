/**
 * 是否是绝对 URL
 * @see https://github.com/axios/axios/blob/v1.x/lib/helpers/isAbsoluteURL.js
 *
 * @param url URL
 *
 * @example
 * ```ts
 * isAbsoluteURL('./a.txt')
 * // => false
 *
 * isAbsoluteURL('http://www.ccc.cn/a.img')
 * // => true
 * ```
 */
export function isAbsoluteURL(url: string) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url)
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(isAbsoluteURL('a.txt')).toBe(false)
    expect(isAbsoluteURL('http://www.xxx/a.txt')).toBe(true)
  })
}
