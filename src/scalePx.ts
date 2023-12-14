import { assign } from 'lodash-unified'
import { isClient } from './isClient'
import { getWindowSize } from './getWindowSize'

export type ScalePxMode = 'width' | 'height'

export interface ScalePxOptions {
  /**
   * 缩放模式
   * @default 'width'
   */
  mode?: ScalePxMode
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
  /**
   * 小数精度
   * @default 6
   */
  precision?: number
}

/**
 * 默认配置
 */
scalePx.defaults = {} as ScalePxOptions

/**
 * 数值由 `px` 基于当前视口大小和设计稿大小的比例进行缩放
 * @param value 数值
 * @param options 配置项
 *
 * @example
 * ```ts
 * scalePx.defaults.mode = 'width'
 * scalePx.defaults.designWidth = 1920
 * scalePx.defaults.precision = 6
 *
 * scalePx(100)
 * // => +((window.innerWidth / 1920) * 100).toFixed(6)
 * ```
 */
export function scalePx(value: number, options: ScalePxOptions = {}) {
  if (!isClient) return value
  const {
    mode = 'width',
    designWidth = 1920,
    designHeight = 1080,
    precision = 6,
  } = assign({}, scalePx.defaults, options)

  const realValue = getWindowSize()[mode]
  const designValue = mode === 'height' ? designHeight : designWidth

  return +((realValue / designValue) * value).toFixed(precision)
}

if (import.meta.vitest) {
  const coreFn = (px: number, base: number, design: number) => +((base / design) * px).toFixed(6)

  it('基础功能', () => {
    expect(coreFn(100, 1000, 2000)).toBe(50)
  })
}
