import { getRootFontSize } from './getRootFontSize'

export interface PxToRemOptions {
  /**
   * 小数精度
   * @default 6
   */
  precision?: number
  /**
   * 是否强制更新根字体大小
   * @default false
   */
  forceUpdateRootFontSize?: boolean
}

/**
 * 数值由 `px` 转为 `rem` 并携带单位
 * @param value 数值
 * @param options 配置项
 *
 * @example
 * ```ts
 * pxToRem.defaults = {
 *   precision: 4,
 * }
 * document.documentElement.style.fontSize = '100px'
 *
 * pxToRem(100)
 * // => '1rem'
 * ```
 */
export function pxToRem(value: number, options: PxToRemOptions = {}) {
  const { precision = 6, forceUpdateRootFontSize = false } = {
    ...(pxToRem.defaults || {}),
    ...options,
  }
  return `${+(value / getRootFontSize(forceUpdateRootFontSize)).toFixed(precision)}rem`
}

export declare namespace pxToRem {
  /**
   * 默认配置
   */
  // eslint-disable-next-line import/no-mutable-exports
  export let defaults: PxToRemOptions | undefined
}
