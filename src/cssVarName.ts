import type { Fn } from '@rhao/types-base'

type CssVarNameType = string | number

/**
 * 变量名处理器
 */
export type CssVarNameProcessor = Fn<[namespace: string, name: CssVarNameType], string>

/**
 * 默认变量名处理器
 *
 * @defaults
 * ```ts
 * (namespace, name) => [namespace, name].filter((name) => name != null && name !== '').join('-')
 * ```
 */
cssVarName.defaultProcessor = ((namespace, name) => {
  return [namespace, name].filter((name) => name != null && name !== '').join('-')
}) as CssVarNameProcessor

/**
 * 获取 `CSS` 变量名
 *
 * @param name 变量名
 * @param useVar 使用 `var()` 函数
 * @param namespace 命名空间
 * @param processor 变量名处理器
 *
 * @example
 * ```ts
 * cssVarName('color')
 * // => '--color'
 *
 * cssVarName('bg', true)
 * // => 'var(--bg)'
 *
 * cssVarName('color', false, 'el')
 * // => '--el-color'
 *
 * cssVarName('color', false, 'el', (namespace, name) => `${namespace}_${name}`)
 * // => '--el_color'
 *
 * cssVarName.defaultProcessor = (namespace, name) => `${namespace}_${name}`
 * cssVarName('color', false, 'el')
 * // => '--el_color'
 * ```
 */
export function cssVarName<T extends CssVarNameType>(
  name: T,
  useVar = false,
  namespace = '',
  processor = cssVarName.defaultProcessor,
) {
  const varName = `--${processor(namespace, name)}`
  return useVar ? `var(${varName})` : varName
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('变量名', () => {
      expect(cssVarName('test')).toBe('--test')
      expect(cssVarName('test', false, 'el')).toBe('--el-test')
      expect(cssVarName('test', false, 'el', (namespace, name) => `${namespace}_${name}`)).toBe(
        '--el_test',
      )
    })

    it('使用变量名', () => {
      expect(cssVarName('test', true)).toBe('var(--test)')
      expect(cssVarName('test', true, 'el')).toBe('var(--el-test)')
      expect(cssVarName('test', true, 'el', (namespace, name) => `${namespace}_${name}`)).toBe(
        'var(--el_test)',
      )

      cssVarName.defaultProcessor = (namespace, name) => `${namespace}_${name}`
      expect(cssVarName('test', true, 'el')).toBe('var(--el_test)')
    })
  })
}
