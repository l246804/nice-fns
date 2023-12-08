import { isClient } from './isClient'

/**
 * 获取窗口尺寸
 *
 * @example
 * ```ts
 * getWindowSize()
 * // => { width: 1920, height: 1080 }
 * ```
 */
export function getWindowSize() {
  const size = { width: 0, height: 0 }
  if (isClient) {
    size.width = window.innerWidth
    size.height = window.innerHeight
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
