import { camelCase, flow, upperFirst } from 'lodash-unified'

/**
 * 字符串转为帕斯卡（大驼峰）格式
 *
 * @example
 * ```ts
 * pascalCase('filename')
 * // => 'Filename'
 * ```
 */
export const pascalCase = flow(camelCase, upperFirst)

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(pascalCase('test value')).toBe('TestValue')
    expect(pascalCase('filename')).toBe('Filename')
  })
}
