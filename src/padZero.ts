import { padStart } from 'lodash-unified'

/**
 * 根据目标长度对数值前置补 0
 * @param num 数值
 * @param targetLength 目标长度
 *
 * @example
 * ```ts
 * padZero(1) // '01'
 * padZero(10) // '10'
 * padZero(10, 5) // '00100'
 * ```
 */
export function padZero(num: string | number, targetLength = 2) {
  return padStart(String(num), targetLength, '0')
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(padZero(1)).toBe('01')
    expect(padZero(100)).toBe('100')
    expect(padZero(100, 5)).toBe('00100')
  })
}
