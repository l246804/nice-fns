export type Numeric = string | number

/**
 * 是否为数字或字符串数字
 * @param value 检测值
 *
 * @example
 * ```ts
 * isNumeric(123)
 * // => true
 *
 * isNumeric('123')
 * // => true
 * ```
 */
export function isNumeric(value: any) {
  return typeof value === 'number' || /^-?\d+(\.\d+)?$/.test(value)
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('数字', () => {
      expect(isNumeric(1.2)).toBe(true)
      expect(isNumeric(-0)).toBe(true)
    })

    it('字符串数字', () => {
      expect(isNumeric('1.2')).toBe(true)
      expect(isNumeric('-0.5')).toBe(true)
    })

    it('非数字', () => {
      expect(isNumeric(true)).toBe(false)
      expect(isNumeric('.25')).toBe(false)
    })
  })
}
