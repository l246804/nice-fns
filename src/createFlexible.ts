import { addUnit } from './addUnit'
import { getDpr } from './getDpr'
import { isClient } from './isClient'
import type { Numeric } from './isNumeric'
import { resolveValue } from './resolveValue'
import { listenWindowResize } from './listenWindowResize'
import { clientRun } from './clientRun'
import { createEventHook } from './createEventHook'
import type { MaybeFn } from './_interface'

export interface CreateFlexibleOptions {
  /**
   * 根字体大小
   * @default 16
   */
  rootFontSize?: MaybeFn<Numeric>
  /**
   * `document.body` 字体大小
   * @default 'inherit'
   */
  bodyFontSize?: MaybeFn<Numeric>
}

interface FontSizeRecord {
  root?: string
  body?: string
}

const NUMBER_FONT_SIZE_RE = /^[\d\.]/
function isNumberFontSize(value: Numeric): value is number {
  return NUMBER_FONT_SIZE_RE.test(value as string)
}

type FlexibleCallback = () => void

/**
 * 创建基于 `rem` 的灵活布局工具
 * @param options 配置项
 *
 * @example
 * ```ts
 * const { setup, unmount } = createFlexible({
 *   rootFontSize: 16,
 *   bodyFontSize: 'inherit'
 * })
 *
 * setup() // 安装灵活布局功能
 * unmount() // 卸载灵活布局功能
 * ```
 */
export function createFlexible(options: CreateFlexibleOptions = {}) {
  const { document } = clientRun.resolveProfile()
  const { rootFontSize = 16, bodyFontSize = 'inherit' } = options

  const record: FontSizeRecord = {}
  const event = createEventHook<FlexibleCallback>()

  const { start: startListen, stop: stopListen } = listenWindowResize(
    setRootFontSize.bind(null, true),
    { immediate: false },
  )

  /**
   * 设置根字体大小
   */
  function setRootFontSize(emit?: boolean) {
    if (record.root == null)
      record.root = document.documentElement.style.fontSize

    const fontSize = resolveValue(rootFontSize)
    document.documentElement.style.fontSize = isNumberFontSize(fontSize)
      ? addUnit(fontSize, 'px')
      : fontSize

    if (emit)
      event.trigger()
  }

  /**
   * 设置 `document.body` 字体大小
   */
  function setBodyFontSize() {
    if (document.body) {
      if (record.body == null)
        record.body = document.body.style.fontSize

      const dpr = getDpr()
      const fontSize = resolveValue(bodyFontSize)
      document.body.style.fontSize = isNumberFontSize(fontSize)
        ? `calc(${addUnit(fontSize, 'px')} * ${dpr})`
        : fontSize
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize, { passive: true })
    }
  }

  /**
   * 安装 `rem` 灵活布局功能
   * 1. 设置根字体大小
   * 2. 设置 `document.body` 字体大小
   * 3. 添加页面监听器
   */
  function setup() {
    if (!isClient)
      return

    setBodyFontSize()
    setRootFontSize()
    startListen()
  }

  /**
   * 卸载 `rem` 灵活布局功能
   * 1. 还原根字体大小
   * 2. 还原 `document.body` 字体大小
   * 3. 移除页面监听器
   */
  function unmount() {
    document.documentElement.style.fontSize = record.root || ''
    document.body.style.fontSize = record.body || ''
    document.removeEventListener('DOMContentLoaded', setBodyFontSize)
    stopListen()
  }

  /**
   * 注册 `rem` 更新回调
   * @example
   * ```ts
   * const flexible = createFlexible()
   *
   * // 注册监听
   * const off = flexible.on(() => {
   *   console.log('rem 更新了！')
   * })
   *
   * // 移除监听
   * off()
   * ```
   */
  function on(callback: FlexibleCallback, once?: boolean) {
    return once ? event.once(callback) : event.on(callback)
  }

  /**
   * 移除 `rem` 更新回调
   */
  function off(callback: FlexibleCallback) {
    return event.off(callback)
  }

  return {
    setup,
    unmount,
    on,
    off,
  }
}
