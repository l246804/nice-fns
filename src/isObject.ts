import { isObjectLike } from './isObjectLike'

/**
 * 判断给定值是否为对象类型
 * @param val 检测值
 */
export function isObject(val: unknown): val is object {
  return isObjectLike(val) || typeof val === 'function'
}

if (import.meta.vitest) {
  describe('isObject', () => {
    test('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ key: 'value' })).toBe(true)
    })

    test('should return true for functions', () => {
      expect(isObject(() => {})).toBe(true)
      expect(isObject(class {})).toBe(true)
    })

    test('should return false for arrays', () => {
      expect(isObject([])).toBe(true)
    })

    test('should return false for null', () => {
      expect(isObject(null)).toBe(false)
    })

    test('should return false for primitive values', () => {
      expect(isObject(42)).toBe(false)
      expect(isObject('string')).toBe(false)
      expect(isObject(true)).toBe(false)
      expect(isObject(false)).toBe(false)
      expect(isObject(undefined)).toBe(false)
      expect(isObject(Symbol('symbol'))).toBe(false)
      expect(isObject(BigInt(123))).toBe(false)
    })
  })
}
