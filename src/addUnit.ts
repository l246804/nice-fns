import { isNumeric } from './isNumeric'

/**
 * 为数字或字符串数字添加单位，若为 `null` 或 `undefined`，则返回空字符串，其他类型则强转为字符串
 *
 * @param value 数值
 * @param unit 单位，默认为：`'px'`
 *
 * @example
 * ```ts
 * addUnit(123)
 * // => '123px'
 *
 * addUnit('100', 'vw')
 * // => '100vw'
 *
 * addUnit('100vh')
 * // => '100vh'
 *
 * addUnit(null)
 * // => ''
 *
 * addUnit(true)
 * // => 'true'
 * ```
 */
export function addUnit(value: any, unit = 'px'): string {
  if (value == null)
    value = ''
  return isNumeric(value) ? value + unit : String(value)
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('数字', () => {
      expect(addUnit(10)).toBe('10px')
    })

    it('字符串数字', () => {
      expect(addUnit('-10.05', 'vw')).toBe('-10.05vw')
    })

    it('非数字', () => {
      expect(addUnit('test')).toBe('test')
      expect(addUnit(true)).toBe('true')
      expect(addUnit(null)).toBe('')
    })
  })
}
