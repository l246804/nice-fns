import { combineURLs } from './combineURLs'
import { isAbsoluteURL } from './isAbsoluteURL'

/**
 * 默认基路径
 */
getFullURL.defaultBase = ''

/**
 * 根据基路径获取完整的 URL
 * @param url 当前路径
 * @param baseURL 基路径
 *
 * @example
 * ```ts
 * getFullURL('logo.png')
 * // => 'logo.png'
 *
 * getFullURL.defaultBase = '/website/'
 *
 * getFullURL('/a.txt')
 * // => '/website/a.txt'
 *
 * getFullURL('http://www.xxx.cn/b.jpeg')
 * // => 'http://www.xxx.cn/b.jpeg'
 *
 * getFullURL('c.txt', 'http://www.xxx.cn/')
 * // => 'http://www.xxx.cn/c.txt'
 *
 * getFullURL('d.exe', '')
 * // => 'd.exe'
 * ```
 */
export function getFullURL(url: string, baseURL = getFullURL.defaultBase) {
  return baseURL && !isAbsoluteURL(url) ? combineURLs(baseURL, url) : url
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('传入基路径', () => {
      expect(getFullURL('logo.png')).toBe('logo.png')
      expect(getFullURL('/a.txt', '/website/')).toBe('/website/a.txt')
    })

    it('设置默认基路径', () => {
      getFullURL.defaultBase = '/website/'
      expect(getFullURL('logo.png')).toBe('/website/logo.png')
      expect(getFullURL('a.txt')).toBe('/website/a.txt')
      expect(getFullURL('a.txt', '/')).toBe('/a.txt')
      expect(getFullURL('http://www.xxx/a.txt')).toBe('http://www.xxx/a.txt')
    })
  })
}
