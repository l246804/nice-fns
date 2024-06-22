import type { MaybeNullish } from '@rhao/types-base'

type Target = MaybeNullish<HTMLElement>

function getScrollLeft(el: Target) {
  if (!el)
    return 0
  return el.scrollLeft
}

function getScrollTop(el: Target) {
  if (!el)
    return 0
  return el.scrollTop
}

function isReachRight(el: Target) {
  if (!el)
    return false
  return getScrollLeft(el) + el.clientWidth >= el.scrollWidth
}

function isReachBottom(el: Target) {
  if (!el)
    return false
  return getScrollTop(el) + el.clientHeight >= el.scrollHeight
}

function setScrollLeft(el: Target, value: number) {
  el?.scrollTo({ left: value })
}

function setScrollTop(el: Target, value: number) {
  el?.scrollTo({ top: value })
}

function addScrollLeft(el: Target, value: number) {
  setScrollLeft(el, getScrollLeft(el) + value)
}

function addScrollTop(el: Target, value: number) {
  setScrollTop(el, getScrollTop(el) + value)
}

/**
 * 获取水平滚动距离
 */
createScrollbarHelper.getScrollLeft = getScrollLeft
/**
 * 获取垂直滚动距离
 */
createScrollbarHelper.getScrollTop = getScrollTop

/**
 * 是否到达水平末端
 */
createScrollbarHelper.isReachRight = isReachRight
/**
 * 是否到达垂直末端
 */
createScrollbarHelper.isReachBottom = isReachBottom

/**
 * 设置水平滚动距离
 */
createScrollbarHelper.setScrollLeft = setScrollLeft
/**
 * 设置垂直滚动距离
 */
createScrollbarHelper.setScrollTop = setScrollTop

/**
 * 增加水平滚动距离
 */
createScrollbarHelper.addScrollLeft = addScrollLeft
/**
 * 增加垂直滚动距离
 */
createScrollbarHelper.addScrollTop = addScrollTop

/**
 * 创建元素滚动栏辅助工具
 * @param el 指定元素
 *
 * @example
 * ```ts
 * const scrollbar = createScrollbarHelper(el)
 *
 * scrollbar.getScrollLeft()
 * // => 0
 *
 * // 实现自动滚动
 * setInterval(() => {
 *   if (scrollbar.isReachBottom()) {
 *     scrollbar.setScrollTop(0)
 *   }
 *   else {
 *     scrollbar.addScrollTop(1)
 *   }
 * }, 30)
 * ```
 */
export function createScrollbarHelper(el: Target) {
  return {
    target: el,

    getScrollLeft: getScrollLeft.bind(null, el),
    getScrollTop: getScrollTop.bind(null, el),

    isReachRight: isReachRight.bind(null, el),
    isReachBottom: isReachBottom.bind(null, el),

    setScrollLeft: setScrollLeft.bind(null, el),
    setScrollTop: setScrollTop.bind(null, el),

    addScrollLeft: addScrollLeft.bind(null, el),
    addScrollTop: addScrollTop.bind(null, el),
  }
}
