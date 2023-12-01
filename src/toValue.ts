import { isFunction } from 'lodash-unified'

/**
 * 获取值，若 `value` 是函数，则后面的参数将传入其中并得到结果
 *
 * @example
 * ```ts
 * toValue(1)
 * // => 1
 *
 * toValue(() => 1)
 * // => 1
 *
 * toValue((v) => v, 1)
 * // => 1
 * ```
 */
export function toValue<
  T,
  P extends any[] = T extends (...args: infer Args) => any ? Args : [],
  R = T extends (...args: any[]) => infer Value ? Value : T,
>(value: T, ...args: P): R {
  return isFunction(value) ? value(...args) : value
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('Function 类型', () => {
      expect(toValue(() => 1)).toBe(1)
      expect(toValue(<T>(value: T) => value, 'text')).toBe('text')
      expect(toValue((value: string, value2: number) => value + value2, '1', 0)).toBe('10')

      expectTypeOf(
        toValue((value: string, value2: number) => value + value2),
      ).toMatchTypeOf<string>()
    })

    it('非 Function 类型', () => {
      expect(toValue(1)).toBe(1)
      expect(toValue('text')).toBe('text')
      expect(toValue(true)).toBe(true)
      expect(toValue(null)).toBe(null)
    })
  })
}
