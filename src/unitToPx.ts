import type { Numeric } from './isNumeric'
import { getRootFontSize } from './getRootFontSize'
import { getWindowSize } from './getWindowSize'
import { isClient } from './isClient'

function convertRem(value: string) {
  value = value.replace(/rem/g, '')
  return +value * getRootFontSize()
}

function convertVw(value: string, windowSize = getWindowSize()) {
  value = value.replace(/vw/g, '')
  return (+value * windowSize.width) / 100
}

function convertVh(value: string, windowSize = getWindowSize()) {
  value = value.replace(/vh/g, '')
  return (+value * windowSize.height) / 100
}

function convertVminAndVMax(value: string, windowSize = getWindowSize()) {
  const hasVmin = value.includes('vmin')
  const { width, height } = windowSize

  value = value.replace(/vmin|vmax/g, '')

  const minFn = width > height ? convertVh : convertVw
  const maxFn = width > height ? convertVw : convertVh

  return hasVmin ? minFn(value, windowSize) : maxFn(value, windowSize)
}

/**
 * 尺寸单位转 `px`，没有尺寸单位时将强转为数字
 * @param value 数值
 *
 * @example
 * ```ts
 * unitToPx('')
 * // => NaN
 *
 * document.documentElement.style.fontSize = '100px'
 * unitToPx('1rem')
 * // => 100
 *
 * unitToPx('100vw')
 * // => window.innerWidth
 *
 * unitToPx('100vh')
 * // => window.innerHeight
 *
 * unitToPx('100vmax')
 * // => window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
 *
 * unitToPx('100vmin')
 * // => window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
 * ```
 */
export function unitToPx(value: Numeric) {
  if (typeof value === 'number') return value

  if (isClient) {
    if (value.includes('rem')) return convertRem(value)
    if (value.includes('vw')) return convertVw(value)
    if (value.includes('vh')) return convertVh(value)
    if (/vmin|vmax/.test(value)) return convertVminAndVMax(value)
  }

  return Number.parseFloat(value)
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('rem', () => {
      getRootFontSize.__rootFontSize__ = 100
      expect(convertRem('1rem')).toBe(100)
    })

    it('vw', () => {
      expect(convertVw('100vw', { width: 1000, height: 0 })).toBe(1000)
    })

    it('vh', () => {
      expect(convertVh('100vh', { width: 0, height: 1000 })).toBe(1000)
    })

    it('vmin', () => {
      expect(convertVminAndVMax('100vmin', { width: 100, height: 1000 })).toBe(100)
    })

    it('vmax', () => {
      expect(convertVminAndVMax('100vmax', { width: 100, height: 1000 })).toBe(1000)
    })
  })
}
