import { isElement } from 'lodash-unified'
import { isClient } from './isClient'
import { defaultWindow } from './defaultWindow'

export type ScrollElement = Element | Window
export type ScrollType = 'x' | 'y' | 'both'

const overflowScrollReg = /scroll|auto|overlay/i

/**
 * 获取可滚动的父元素，若直到终点元素仍未找到则返回 `null`
 * @param start 起点元素
 * @param type 滚动类型
 * @param end 终点元素
 *
 * @example
 * ```ts
 * // 获取 x 轴方向的可滚动父元素
 * getScrollParent(element, 'x', document.documentElement)
 *
 * // 获取 y 轴方向的可滚动父元素
 * getScrollParent(element, 'y', document.documentElement)
 *
 * // 获取任意轴方向的可滚动父元素
 * getScrollParent(element, 'both', document.documentElement)
 * ```
 */
export function getScrollParent(
  start?: Element | null,
  type: ScrollType = 'both',
  end: ScrollElement = defaultWindow as ScrollElement,
) {
  if (!isClient) return null

  let styleName = 'overflow'
  if (type !== 'both' && ['x', 'y'].includes(type)) styleName += type.toUpperCase()

  let node = start
  while (node && node !== end && isElement(node)) {
    const style = window.getComputedStyle(node)
    if (overflowScrollReg.test(style[styleName as any])) return node

    node = node.parentNode as Element
  }

  return null
}

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(getScrollParent(null)).toBe(null)
  })
}
