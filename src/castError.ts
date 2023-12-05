import { isError } from 'lodash-unified'

/**
 * 转换值为 `Error`
 * @param value 检测值
 *
 * @example
 * ```ts
 * castError(1)
 * // => Error { error: 'error', message: '1' }
 *
 * castError(new Error('This is error'))
 * // => Error { name: 'error', message: 'This is error' }
 * ```
 */
export function castError(value: any) {
  return isError(value) ? value : new Error(String(value))
}

if (import.meta.vitest) {
  describe('Error 类型', () => {
    it('不做转换', () => {
      const error = new Error('this is an error')
      expect(castError(error)).toBe(error)
    })
  })

  describe('非 Error 类型', () => {
    it('Object', () => {
      const error = { name: 'Error', message: 'This is an Error.' }
      expect(castError(error).message).toBe(String(error))
    })

    it('Array', () => {
      const error: any[] = []
      const error2: any[] = [{}]

      expect(castError(error).message).toBe('')
      expect(castError(error2).message).toBe(String(error2))
    })

    it('Number', () => {
      const error = 1
      expect(castError(error).message).toBe(String(error))
    })

    it('Boolean', () => {
      const error = true
      expect(castError(error).message).toBe(String(error))
    })

    it('String', () => {
      const error = 'This is an Error.'
      expect(castError(error).message).toBe(error)
    })
  })
}
