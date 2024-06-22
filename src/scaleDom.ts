export interface ScaleDomOptions {
  /**
   * 缩放模式
   */
  mode?: 'both' | 'x' | 'y'
  /**
   * 元素在设计稿的宽度
   */
  designWidth: number
  /**
   * 元素在设计稿的高度
   */
  designHeight: number
  /**
   * 小数精度
   * @default 6
   */
  precision?: number
  /**
   * 缩放基准位置，等同于更改指定元素的 `style.transformOrigin`
   * @default 'top left'
   */
  origin?: string
  /**
   * 若指定 `dom` 已存在需要缩放更改的属性（`width、height、transform`）时是否覆盖
   * @default true
   */
  override?: boolean
  /**
   * 缩放时需更改 `width`、`height` 属性，可能导致元素溢出，是否为父级设置 `overflow: hidden`
   * @default true
   */
  parentHideOverflow?: boolean
}

const SCALE_RE = /\s*scale[XY]?\(.+\)/

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
 * // document.documentElement
 * { clientWidth: 3840, clientHeight: 2160 }
 *
 * // 缩放根元素
 * scaleDom(document.documentElement, { ...designSize, mode: 'both' })
 *
 * document.documentElement.style.transform
 * // => 'scale(2, 2)'
 * ```
 */
export function scaleDom(dom: HTMLElement, options: ScaleDomOptions) {
  const {
    mode = 'both',
    designWidth,
    designHeight,
    precision = 6,
    origin: transformOrigin = 'top left',
    override = true,
    parentHideOverflow = true,
  } = options

  const domSize = {
    width: dom.clientWidth,
    height: dom.clientHeight,
  }
  const scale = {
    x: (domSize.width / designWidth).toFixed(precision),
    y: (domSize.height / designHeight).toFixed(precision),
  }

  const style = dom.style

  // 检测是否存在缩放并判断是否继续
  if ((SCALE_RE.test(style.transform) || style.width || style.height) && !override)
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

  style.width = `${designWidth}px`
  style.height = `${designHeight}px`
  style.transformOrigin = transformOrigin
  style.transform = [restTransform, space, scaleCss].join('')

  if (parentHideOverflow && dom.parentElement)
    dom.parentElement.style.overflow = 'hidden'
}
