import type { Nullish } from '@rhao/types-base'
import { filter, flow, fromPairs, isNil, partialRight, toPairs } from 'lodash-unified'

const _filter = partialRight(filter, (pairs: any[]) => !isNil(pairs[1]))

interface CompactObject {
  <T extends object>(object: T): { [K in keyof T as T[K] extends Nullish ? never : K]: T[K] }
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
export const compactObject = flow(toPairs, _filter, fromPairs) as CompactObject

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(compactObject({ a: null, b: 1, c: 0, d: false, e: undefined })).toStrictEqual({
      b: 1,
      c: 0,
      d: false,
    })
  })
}
