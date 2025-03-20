import type { MaybeFn } from './_interface'
import { castFunction } from './castFunction'

/**
 * 获取值，若 `value` 是函数，则后面的参数将传入其中并得到结果
 * @param value 目标值
 * @param args `value` 是函数时的参数列表
 *
 * @example
 * ```ts
 * resolveValue(1)
 * // => 1
 *
 * resolveValue(() => 1)
 * // => 1
 *
 * resolveValue((v) => v, 1)
 * // => 1
 * ```
 */
export function resolveValue<T, Args extends any[]>(value: MaybeFn<T, Args>, ...args: Args): T {
  return castFunction(value)(...args)
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('Function 类型', () => {
      expect(resolveValue(() => 1)).toBe(1)
      expect(resolveValue(<T>(value: T) => value, 'text')).toBe('text')
      expect(resolveValue((value: string, value2: number) => value + value2, '1', 0)).toBe('10')

      expectTypeOf(
        resolveValue((value: string, value2: number) => value + value2, '1', 2),
      ).toMatchTypeOf<string>()
    })

    it('非 Function 类型', () => {
      expect(resolveValue(1)).toBe(1)
      expect(resolveValue('text')).toBe('text')
      expect(resolveValue(true)).toBe(true)
      expect(resolveValue(null)).toBe(null)
    })
  })
}
