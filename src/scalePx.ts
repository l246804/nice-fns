import { getWindowSize } from './getWindowSize'
import { isClient } from './isClient'

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
  /**
   * 获取窗口大小进行计算时是否排除滚动条大小
   * @default false
   */
  excludeScrollbar?: boolean
}

/**
 * 数值由 `px` 基于当前视口大小和设计稿大小的比例进行缩放
 * @param value 数值
 * @param options 配置项
 *
 * @example
 * ```ts
 * scalePx.defaults = {
 *   mode: 'width',
 *   designWidth: 1920,
 *   precision: 6,
 * }
 *
 * scalePx(100)
 * // => +((window.innerWidth / 1920) * 100).toFixed(6)
 * ```
 */
export function scalePx(value: number, options: ScalePxOptions = {}) {
  if (!isClient)
    return value
  const {
    mode = 'width',
    designWidth = 1920,
    designHeight = 1080,
    precision = 6,
    excludeScrollbar = false,
  } = {
    ...(scalePx.defaults || {}),
    ...options,
  }

  const realValue = getWindowSize(excludeScrollbar)[mode]
  const designValue = mode === 'height' ? designHeight : designWidth

  return +((realValue / designValue) * value).toFixed(precision)
}

export declare namespace scalePx {
  /**
   * 默认配置
   */
  // eslint-disable-next-line import/no-mutable-exports
  export let defaults: ScalePxOptions | undefined
}

if (import.meta.vitest) {
  const coreFn = (px: number, base: number, design: number) => +((base / design) * px).toFixed(6)

  it('基础功能', () => {
    expect(coreFn(100, 1000, 2000)).toBe(50)
  })
}
