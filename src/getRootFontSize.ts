import { isClient } from './isClient'

/**
 * 根元素字体大小
 */
getRootFontSize.__rootFontSize__ = 0

/**
 * 获取根元素字体大小
 * @param forceUpdate 由于会缓存根元素字体大小，若需更新则设置 `forceUpdate` 为 `true`
 *
 * @example
 * ```ts
 * // 初始获取，数值将被缓存
 * getRootFontSize()
 * // => 16
 *
 * // 强制更新缓存
 * getRootFontSize(true)
 * // => 14
 * ```
 */
export function getRootFontSize(forceUpdate = false) {
  if (isClient && (!getRootFontSize.__rootFontSize__ || forceUpdate)) {
    const element = document.documentElement
    const fontSize = element.style.fontSize || window.getComputedStyle(element).fontSize
    getRootFontSize.__rootFontSize__ = Number.parseFloat(fontSize)
  }
  return getRootFontSize.__rootFontSize__
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('Node 环境', () => {
      expect(getRootFontSize()).toBe(0)
    })
  })
}
