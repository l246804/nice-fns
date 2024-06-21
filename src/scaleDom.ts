import { getWindowSize } from './getWindowSize'

export interface ScaleDomOptions {
  /**
   * 缩放模式
   */
  mode?: 'both' | 'x' | 'y'
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
  /**
   * 缩放基准位置，等同于更改指定元素的 `style.transformOrigin`
   * @default 'top left'
   */
  origin?: string
  /**
   * 若指定 `dom` 已存在缩放时是否覆盖
   * @default true
   */
  override?: boolean
}

const SCALE_RE = /\s*scale[XY]?\(.+\)/

/**
 * 默认配置
 */
scaleDom.defaults = {} as ScaleDomOptions

/**
 * 根据当前窗口大小与设计稿大小比例缩放指定元素
 * @param dom 指定元素
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 设计稿大小
 * const designSize = {
 *   designWidth: 1920,
 *   designHeight: 1080,
 * }
 *
 * // 当前窗口大小
 * getWindowSize()
 * // => { width: 3840, height: 2160 }
 *
 * // 缩放根元素
 * scaleDom(document.documentElement, { ...designSize, mode: 'both' })
 *
 * document.documentElement.style.transform
 * // => 'scale(2, 2)'
 * ```
 */
export function scaleDom(
  dom: HTMLElement = document.documentElement,
  options: ScaleDomOptions = scaleDom.defaults,
) {
  const {
    mode = 'both',
    designWidth = 1920,
    designHeight = 1080,
    precision = 6,
    excludeScrollbar = false,
    origin: transformOrigin = 'top left',
    override = true,
  } = options

  const winSize = getWindowSize(excludeScrollbar)
  const scale = {
    x: (winSize.width / designWidth).toFixed(precision),
    y: (winSize.height / designHeight).toFixed(precision),
  }

  const style = dom.style

  // 检测是否存在缩放并判断是否继续
  if (SCALE_RE.test(style.transform) && !override)
    return

  const restTransform = style.transform.replace(SCALE_RE, '')
  const space = restTransform ? ' ' : ''
  const scaleCss
    = mode === 'both'
      ? `scale(${scale.x},${scale.y})`
      : mode === 'x'
        ? `scaleX(${scale.x})`
        : mode === 'y'
          ? `scaleY(${scale.y})`
          : ''

  style.transformOrigin = transformOrigin
  style.transform = [restTransform, space, scaleCss].join('')
}
