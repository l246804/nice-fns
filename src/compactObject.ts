import type { IfNil } from './_interface'

interface CompactObject {
  <T extends {}>(object: T): { [K in keyof T as IfNil<T[K], never, K>]: T[K] }
}

/**
 * 移除对象值为 `null` 和 `undefined` 的属性
 * @param object 目标对象
 *
 * @example
 * ```ts
 * compactObject({ a: 0, b: undefined, c: null, d: '', f: false, e: NaN })
 * // => { a: 0, d: '', f: false, e: NaN }
 * ```
 */
export const compactObject = ((object) => {
  return Object.fromEntries(Object.entries(object).filter(([_, value]) => value != null))
}) as CompactObject

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(compactObject({ a: null, b: 1, c: 0, d: false, e: undefined })).toStrictEqual({
      b: 1,
      c: 0,
      d: false,
    })
  })
}
