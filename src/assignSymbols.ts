import { isObject } from 'lodash-unified'
import { symbolsOf } from './symbolsOf'

/**
 * 分配符号属性到目标对象上
 * @param target 目标对象
 * @param sources 一个或多个来源对象
 *
 * @example
 * ```ts
 * const obj = {}
 *
 * const obj1 = {}
 * obj1[Symbol('key1')] = 1
 *
 * const obj2 = {}
 * obj2[Symbol('key2')] = 2
 *
 * assignSymbols(obj, obj1, obj2)
 * // => { [Symbol('key1')]: 1, [Symbol('key2')]: 2 }
 * ```
 */
export function assignSymbols<T extends {}>(target: T, ...sources: any[]): T {
  if (isObject(target)) {
    for (const source of sources) {
      const symbols = symbolsOf(source || {})
      for (const syb of symbols) (target as any)[syb] = source[syb]
    }
  }
  return target
}

if (import.meta.vitest) {
  it('分配符号属性', () => {
    const syb = Symbol('symbol1')
    const syb2 = Symbol('symbol2')

    const target = {
      [syb]: 1,
    }
    const source = {
      [syb]: 5,
      [syb2]: 10,
    }
    const result: any = assignSymbols(target, source, { [syb]: 200 })

    expect(result[syb]).toBe(200)
    expect(result[syb2]).toBe(10)
    expect(source[syb]).toBe(5)
  })
}
