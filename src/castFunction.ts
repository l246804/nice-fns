import { isFunction } from 'lodash-unified'
import type { ToFn } from '@rhao/types-base'

/**
 * 转换值为 `Function`
 * @param value 检测值
 *
 * @example
 * ```ts
 * castFunction(1)
 * // => () => 1
 *
 * castFunction(() => '1')
 * // => () => '1'
 * ```
 */
export function castFunction<T, Args extends any[] = []>(value: T) {
  return (isFunction(value) ? value : () => value) as ToFn<T, Args>
}

if (import.meta.vitest) {
  describe('Function 类型', () => {
    it('不做转换', () => {
      const fn = () => 1
      expect(castFunction(fn)).toBe(fn)
    })
  })

  describe('非 Function 类型', () => {
    it('对比结果', () => {
      const value = 'text'
      expectTypeOf(castFunction(value)).toBeFunction()
    })

    it('对比类型', () => {
      const value = 'text'
      expectTypeOf(castFunction(value)).toMatchTypeOf<() => string>()
      expectTypeOf(
        castFunction<string | number, [value: string, value2: number]>(value),
      ).toMatchTypeOf<(value: string, value2: number) => string | number>()
    })
  })
}
