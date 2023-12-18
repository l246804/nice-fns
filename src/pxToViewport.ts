export interface PxToViewportOptions {
  /**
   * 小数精度
   * @default 6
   */
  precision?: number
  /**
   * 转换后的单位
   * @default 'vw'
   */
  unit?: 'vw' | 'vh' | 'vmin' | 'vmax'
  /**
   * 设计稿宽度
   * @default 1920
   */
  designWidth?: number
  /**
   * 设计稿高度
   * @default 1080
   */
  designHeight?: number
}

/**
 * 默认配置
 */
pxToViewport.defaults = {} as PxToViewportOptions

/**
 * 数值由 `px` 转为 `viewport` 并携带单位
 * @param value 数值
 * @param options 配置项
 *
 * @example
 * ```ts
 * pxToViewport.defaults.unit = 'vw'
 * pxToViewport.defaults.designWidth = 1440
 * pxToViewport.defaults.precision = 4
 *
 * pxToViewport(100)
 * // => '${((100 / 1440) * 100).toFixed(4)}${vw}'
 * ```
 */
export function pxToViewport(value: number, options: PxToViewportOptions = {}) {
  const {
    precision = 6,
    unit = 'vw',
    designWidth = 1920,
    designHeight = 1080,
  } = { ...pxToViewport.defaults, ...options }

  const baseValue
    = unit === 'vh'
      ? designHeight
      : unit === 'vw'
        ? designWidth
        : Math[unit === 'vmax' ? 'max' : 'min'](designHeight, designWidth)

  return `${+((value / baseValue) * 100).toFixed(precision)}${unit}`
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('vw', () => {
      expect(pxToViewport(100, { designWidth: 1000, unit: 'vw' })).toBe('10vw')
    })

    it('vh', () => {
      expect(pxToViewport(100, { designHeight: 1000, unit: 'vh' })).toBe('10vh')
    })

    it('vmax', () => {
      expect(pxToViewport(100, { designWidth: 1000, designHeight: 100, unit: 'vmax' })).toBe(
        '10vmax',
      )
    })

    it('vmin', () => {
      expect(pxToViewport(10, { designWidth: 1000, designHeight: 100, unit: 'vmin' })).toBe(
        '10vmin',
      )
    })
  })
}
