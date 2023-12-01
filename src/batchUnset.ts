import type { PropertyPath } from 'lodash-unified'
import { unset } from 'lodash-unified'

/**
 * 批量执行 `lodash.unset`
 *
 * @example
 * ```ts
 * batchUnset({ a: 1, b: { c: 2, d: 4, e: 5 } }, ['a', 'b.e'])
 * // => { b: { c: 2, d: 4 } }
 * ```
 */
export function batchUnset(object: any, keys: PropertyPath[] = []) {
  return keys.map((key) => unset(object, key))
}

if (import.meta.vitest) {
  describe('删除正常属性', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
    }
    const result = batchUnset(object, ['a', 'c', 'd'])

    it('对比目标对象', () => {
      expect(object).toStrictEqual({ b: 2 })
    })

    it('对比结果', () => {
      expect(result).toStrictEqual([true, true, true])
    })
  })

  describe('删除不可配置的属性', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
    }
    Object.defineProperty(object, 'd', { configurable: false, value: 4 })

    it.fails('严格模式会报错', () => {
      batchUnset(object, ['a', 'c', 'd'])
    })
  })
}
