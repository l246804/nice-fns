/**
 * 判断是否为对象，基于 `typeof` 进行判断并排除了 `null`
 * @param val 检测值
 */
export function isObjectLike(val: unknown): val is object {
  return typeof val === 'object' && val !== null
}

if (import.meta.vitest) {
  describe('isObjectLike', () => {
    it('should return true for plain objects', () => {
      expect(isObjectLike({})).toBe(true)
    })

    it('should return true for arrays', () => {
      expect(isObjectLike([])).toBe(true)
    })

    it('should return true for Date objects', () => {
      expect(isObjectLike(new Date())).toBe(true)
    })

    it('should return false for null', () => {
      expect(isObjectLike(null)).toBe(false)
    })

    it('should return false for strings', () => {
      expect(isObjectLike('string')).toBe(false)
    })

    it('should return false for numbers', () => {
      expect(isObjectLike(123)).toBe(false)
    })

    it('should return false for booleans', () => {
      expect(isObjectLike(true)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isObjectLike(undefined)).toBe(false)
    })

    it('should return false for functions', () => {
      expect(isObjectLike(() => {})).toBe(false)
    })
  })
}
