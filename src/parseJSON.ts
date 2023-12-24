import type { NotNullish } from '@rhao/types-base'
import { isFunction, isNil } from 'lodash-unified'

export interface ParseJSONOptions<T = any> {
  /**
   * 解析结果为 `null` 或 `undefined` 时执行并返回最终结果
   * @param error 解析错误时的错误信息
   * @param value 解析结果，固定为 `null` 或 `undefined`
   * @param text 解析的 `JSON` 文本
   *
   * @example
   * ```ts
   * parseJSON('这是错误的 JSON 文本', {
   *   onNil(error, value) {
   *     if (error) return 'error'
   *     return value === null ? 'null' : 'default'
   *   },
   * })
   * // => 'error'
   *
   * parseJSON('直接设置默认值', { onNil: 'default' })
   * // => 'default'
   * ```
   */
  onNil?: T | ((error: Error | undefined, value: null | undefined, text: string) => T)
  /**
   * `JSON.parse(text, reviver)`
   */
  reviver?: Parameters<typeof JSON.parse>[1]
}

const defaultOnNil: NotNullish<ParseJSONOptions['onNil']> = (_: any, value: any) => {
  return value
}

/**
 * 解析 `JSON` 文本
 * @param text `JSON` 文本
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 错误或者值为空时设置 {}
 * parseJSON('{ a: 1 }', { onNil: {} }) // 简写默认值
 * parseJSON('{ a: 1 }', { onNil: () => ({})  }) // 函数返回默认值
 * // => {}
 *
 * // 错误时设为 {}
 * parseJSON('{ a: 1 }', { onNil: (error) => error ? {} : null  })
 * // => {}
 *
 * // 值为空时设为 {}
 * parseJSON('null', { onNil: (error) => error ? null : {} })
 * // => {}
 * ```
 */
export function parseJSON<T>(text: string, options: ParseJSONOptions<T> = {}): T {
  const { onNil = defaultOnNil, reviver } = options
  const _onNil = isFunction(onNil) ? onNil : () => onNil
  try {
    const result = JSON.parse(text, reviver)
    return isNil(result) ? _onNil(undefined, result, text) : result
  }
  catch (error: any) {
    return _onNil(error, undefined, text)
  }
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('默认值', () => {
      expect(parseJSON('{ a: 1 }', { onNil: () => ({ a: 0 }) })).toStrictEqual({ a: 0 })
      expect(parseJSON('{ a: 1 }', { onNil: { a: 0 } })).toStrictEqual({ a: 0 })
    })

    it('解析错误返回默认值', () => {
      expect(
        parseJSON('{ a: 1 }', { onNil: (error, value) => (error ? { a: 0 } : value) }),
      ).toStrictEqual({ a: 0 })

      expect(parseJSON('null', { onNil: (error, value) => (error ? { a: 0 } : value) })).toBeNull()
    })
  })
}
