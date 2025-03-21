import type { MaybeNil } from './_interface'
import { pick } from 'es-toolkit'
import { assign } from './assign'
import { getWindowSize } from './getWindowSize'

export interface ScaleDomOptions {
  /**
   * 缩放模式
   */
  mode?: 'both' | 'x' | 'y'
  /**
   * 设计稿的宽度，用于计算缩放比例
   * @default 1920
   */
  designWidth?: number
  /**
   * 设计稿的高度，用于计算缩放比例
   * @default 1080
   */
  designHeight?: number
  /**
   * 元素在设计稿的宽度，用于固定元素宽度
   * @default options.designWidth
   */
  elementWidth?: number
  /**
   * 元素在设计稿的高度，用于固定元素高度
   * @default options.designHeight
   */
  elementHeight?: number
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
   * 若指定 DOM 已存在需要缩放更改的属性（`width、height、transform`）时是否覆盖
   * @default true
   */
  override?: boolean
  /**
   * 缩放时需更改 `width`、`height` 属性，可能导致元素溢出，是否为父级设置 `overflow: hidden`
   * @default true
   */
  parentHideOverflow?: boolean
}

interface ScaleMeta {
  options: ScaleDomOptions
  parentRawStyle: Partial<CSSStyleDeclaration>
  selfRawStyle: Partial<CSSStyleDeclaration>
  scale: {
    x: number
    y: number
  }
}

const SCALE_RE = /\s*scale[XY]?\(.+\)/
const META_KEY = Symbol('scaleMeta')

type ScaleDomElement = HTMLElement & { [META_KEY]?: ScaleMeta }

/**
 * 还原缩放效果，仅对该函数已缩放元素有效
 * @param dom 缩放的 DOM 元素
 */
export function revertScaled(dom: MaybeNil<ScaleDomElement>) {
  const meta = dom?.[META_KEY]
  if (!meta)
    return

  const style = dom.style
  assign(style, meta.selfRawStyle)
  dom.parentElement && assign(dom.parentElement, meta.parentRawStyle)
  dom[META_KEY] = undefined
}

/**
 * 默认的缩放比例
 */
const NORMAL_SCALE = { x: 1, y: 1 }

/**
 * 获取元素的缩放比例
 * @param dom 缩放的 DOM 元素
 */
export function getScaled(dom: MaybeNil<ScaleDomElement>) {
  const meta = dom?.[META_KEY]
  return assign({}, meta ? meta.scale : NORMAL_SCALE)
}

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
 * // getWindowSize()
 * { width: 3840, height: 2160 }
 *
 * // 缩放根元素
 * scaleDom(document.documentElement, { ...designSize, mode: 'both' })
 *
 * document.documentElement.style
 * // => 'width: 1920px; height:1080px; transform-origin:top left; transform: scale(2, 2);'
 *
 * // 单一元素缩放
 * scaleDom(document.querySelector('.card'), {
 *   designWidth: 1920,
 *   designHeight: 1080,
 *   elementWidth: 300,
 *   elementHeight: 200,
 * })
 *
 * .card
 * // => 'width: 300px; height:200px; transform-origin:top left; transform: scale(2, 2);'
 * ```
 */
export function scaleDom(dom: MaybeNil<ScaleDomElement>, options: ScaleDomOptions = {}) {
  if (!dom)
    return

  const {
    mode = 'both',
    designWidth = 1920,
    designHeight = 1080,
    precision = 6,
    origin: transformOrigin = 'top left',
    override = true,
    parentHideOverflow = true,
  } = {
    ...(scaleDom.defaults || {}),
    ...options,
  }
  const { elementWidth = designWidth, elementHeight = designHeight } = options

  const style = dom.style
  // 检测是否存在待更改属性并判断是否继续
  if ((SCALE_RE.test(style.transform) || style.width || style.height) && !override)
    return

  const winSize = getWindowSize()
  const scale = {
    x: +(winSize.width / designWidth).toFixed(precision),
    y: +(winSize.height / designHeight).toFixed(precision),
  }

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

  const meta: ScaleMeta = {
    options,
    parentRawStyle: {},
    selfRawStyle: pick(style, ['width', 'height', 'transformOrigin', 'transform']),
    scale,
  }

  style.width = `${elementWidth}px`
  style.height = `${elementHeight}px`
  style.transformOrigin = transformOrigin
  style.transform = [restTransform, space, scaleCss].join('')

  if (parentHideOverflow && dom.parentElement) {
    meta.parentRawStyle = pick(dom.parentElement.style, ['overflow'])
    dom.parentElement.style.overflow = 'hidden'
  }

  dom[META_KEY] = meta
}

export declare namespace scaleDom {
  /**
   * 默认配置
   */
  // eslint-disable-next-line import/no-mutable-exports, no-var
  export let defaults: Omit<ScaleDomOptions, 'elementWidth' | 'elementHeight'> | undefined
}
