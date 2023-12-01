/**
 * 组合 URL
 *
 * @example
 * ```ts
 * combineURLs('/website')
 * // => '/website'
 *
 * combineURLs('/website/', '/api')
 * // => '/website/api'
 *
 * combineURLs('/website/', '/api', 'v2')
 * // => '/website/api/v2'
 * ```
 */
export function combineURLs(baseURL: string, ...relativeURLs: string[]) {
  return relativeURLs
    .filter(Boolean)
    .reduce(
      (base, relative) => `${base.replace(/\/+$/, '')}/${relative.replace(/^\/+/, '')}`,
      baseURL,
    )
}

if (import.meta.vitest) {
  it('仅基路径时直接返回', () => {
    const base = 'http://www.xxx.com/'
    expect(combineURLs(base)).toBe(base)
  })

  it('组合多个相对路径', () => {
    const base = '/api/'
    const relative = 'test'
    const relative2 = '/list'
    expect(combineURLs(base, relative, relative2)).toBe('/api/test/list')
  })
}
