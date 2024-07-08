import { clientRun } from './clientRun'
import { isClient } from './isClient'

/**
 * 获取窗口尺寸
 * @param excludeScrollbar 是否排除滚动条，默认包含滚动条大小
 *
 * @example
 * ```ts
 * getWindowSize()
 * // => { width: 1920, height: 1080 }
 *
 * // 排除滚动条尺寸
 * getWindowSize(true)
 * // => { width: 1910, height: 1080 }
 * ```
 */
export function getWindowSize(excludeScrollbar?: boolean) {
  const size = { width: 0, height: 0 }
  if (isClient) {
    const { window, document } = clientRun.resolveProfile()
    size.width = excludeScrollbar ? document.documentElement.clientWidth : window.innerWidth
    size.height = excludeScrollbar ? document.documentElement.clientHeight : window.innerHeight
  }
  return size
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    it('Node 环境', () => {
      expect(getWindowSize()).toStrictEqual({ width: 0, height: 0 })
    })
  })
}
