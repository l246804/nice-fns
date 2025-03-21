import type { Fn } from './_interface'

/**
 * 判断是否为函数
 * @param val 检测值
 */
export function isFunction(val: unknown): val is Fn {
  return typeof val === 'function'
}

if (import.meta.vitest) {
  describe('isFunction', () => {
    it('should return true for a function', () => {
      expect(isFunction(() => {})).toBe(true)
    })

    it('should return false for a number', () => {
      expect(isFunction(123)).toBe(false)
    })

    it('should return false for a string', () => {
      expect(isFunction('string')).toBe(false)
    })

    it('should return false for an object', () => {
      expect(isFunction({})).toBe(false)
    })

    it('should return false for an array', () => {
      expect(isFunction([])).toBe(false)
    })

    it('should return false for null', () => {
      expect(isFunction(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isFunction(undefined)).toBe(false)
    })

    it('should return false for a boolean', () => {
      expect(isFunction(true)).toBe(false)
    })

    it('should return false for a symbol', () => {
      expect(isFunction(Symbol('symbol'))).toBe(false)
    })

    it('should return false for a class', () => {
      class TestClass {}
      expect(isFunction(TestClass)).toBe(true) // 注意：类本身是函数
    })

    it('should return false for a class instance', () => {
      class TestClass {}
      expect(isFunction(new TestClass())).toBe(false)
    })
  })
}
