import { assign } from 'lodash-unified'
import { getRootFontSize } from './getRootFontSize'

export interface PxToRemOptions {
  /**
   * 小数精度
   * @default 6
   */
  precision?: number
}

/**
 * 默认配置
 */
pxToRem.defaults = {} as PxToRemOptions

/**
 * 数值由 `px` 转为 `rem` 并携带单位
 * @param value 数值
 * @param options 配置项
 *
 * @example
 * ```ts
 * pxToRem.defaults.precision = 4
 * document.documentElement.style.fontSize = '100px'
 *
 * pxToRem(100)
 * // => '1rem'
 * ```
 */
export function pxToRem(value: number, options: PxToRemOptions = {}) {
  const { precision = 6 } = assign({}, pxToRem.defaults, options)
  return `${+(value / getRootFontSize()).toFixed(precision)}rem`
}

if (import.meta.vitest) {
  it('基础功能', () => {
    getRootFontSize.__rootFontSize__ = 100
    expect(pxToRem(100)).toBe('1rem')
  })
}
