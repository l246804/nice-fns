import { isClient } from './isClient'

/**
 * 获取窗口尺寸
 * @param useDocument 使用 `document.documentElement` 获取窗口大小，将排除窗口边框和滚动条大小
 *
 * @example
 * ```ts
 * getWindowSize()
 * // => { width: 1920, height: 1080 }
 *
 * // 排除边框和滚动条
 * getWindowSize(true)
 * // => { width: 1910, height: 1080 }
 * ```
 */
export function getWindowSize(useDocument?: boolean) {
  const size = { width: 0, height: 0 }
  if (isClient) {
    size.width = useDocument ? document.documentElement.clientWidth : window.innerWidth
    size.height = useDocument ? document.documentElement.clientHeight : window.innerHeight
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
