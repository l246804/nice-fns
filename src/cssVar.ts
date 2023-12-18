import type { Recordable } from '@rhao/types-base'
import type { CssVarNameProcessor } from './cssVarName'
import { cssVarName } from './cssVarName'

/**
 * 转换对象属性为 `CSS` 变量，将会过滤掉值为 `null` 和 `undefined` 的属性
 *
 * @param object 源对象
 * @param namespace 变量名命名空间
 * @param processor 变量名处理器
 *
 * @example
 * ```ts
 * cssVar({ color: 'red', 'bg-color': 'black' })
 * // => { '--color': 'red', '--bg-color': 'black' }
 *
 * cssVar({ color: 'red' }, 'el')
 * // => { '--el-color': 'red' }
 *
 * cssVar({ color: 'red', 'bg-color': 'black' }, 'el', (namespace, name) => camelCase(`${namespace}-${name}`))
 * // => { '--elColor': 'red', '--elBgColor': 'black' }
 * ```
 */
export function cssVar<T extends Recordable = Recordable>(
  object: T,
  namespace = '',
  processor?: CssVarNameProcessor,
) {
  const styles: Recordable<string> = {}

  for (const key in object)
    if (object[key] != null) styles[cssVarName(key, false, namespace, processor)] = object[key]

  return styles
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(cssVar({ color: 'red', 'bg-color': 'black' })).toStrictEqual({
      '--color': 'red',
      '--bg-color': 'black',
    })
    expect(cssVar({ color: 'red', 'bg-color': 'black' }, 'el')).toStrictEqual({
      '--el-color': 'red',
      '--el-bg-color': 'black',
    })
    expect(cssVar({ color: 'red', 'bg-color': 'black', font: null }, 'el')).toStrictEqual({
      '--el-color': 'red',
      '--el-bg-color': 'black',
    })
    expect(
      cssVar({ color: 'red', 'bg-color': 'black', font: null }, 'el', (namespace, name) =>
        _.camelCase(`${namespace}-${name}`)),
    ).toStrictEqual({
      '--elColor': 'red',
      '--elBgColor': 'black',
    })
  })
}
