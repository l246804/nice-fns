import type { MaybeFn } from '@rhao/types-base'
import { addUnit } from './addUnit'
import { getDpr } from './getDpr'
import { isClient } from './isClient'
import type { Numeric } from './isNumeric'
import { toValue } from './toValue'

export interface CreateFlexibleOptions {
  /**
   * 根字体大小
   * @default () => document.clientWidth / 10
   */
  rootFontSize?: () => Numeric
  /**
   * `document.body` 字体大小
   * @default 16
   */
  bodyFontSize?: MaybeFn<Numeric>
}

interface FontSizeRecord {
  root?: string
  body?: string
}

/**
 * 创建灵活布局工具
 * @param options 配置项
 *
 * @example
 * ```ts
 * const { setup, unmount } = createFlexible({
 *   rootFontSize: document.clientWidth / 10, bodyFontSize: 16
 * })
 *
 * setup() // 安装灵活布局功能
 * unmount() // 卸载灵活布局功能
 * ```
 */
export function createFlexible(options: CreateFlexibleOptions = {}) {
  const { bodyFontSize = 16, rootFontSize = () => document.documentElement.clientWidth / 10 }
    = options
  const record: FontSizeRecord = {}

  /**
   * 设置根字体大小
   */
  function setRootFontSize() {
    if (record.root == null)
      record.root = document.documentElement.style.fontSize

    document.documentElement.style.fontSize = addUnit(rootFontSize(), 'px')
  }

  /**
   * 设置 `document.body` 字体大小
   */
  function setBodyFontSize() {
    if (document.body) {
      if (record.body == null)
        record.body = document.body.style.fontSize

      const dpr = getDpr()
      document.body.style.fontSize = `calc(${addUnit(toValue(bodyFontSize), 'px')} * ${dpr})`
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }

  const pageShowListener = (e: PageTransitionEvent) => e.persisted && setRootFontSize()
  /**
   * 添加页面监听器
   */
  function addPageListener() {
    window.addEventListener('resize', setRootFontSize)
    window.addEventListener('pageshow', pageShowListener)
  }

  /**
   * 移除页面监听器
   */
  function removePageListener() {
    window.removeEventListener('resize', setRootFontSize)
    window.removeEventListener('pageshow', pageShowListener)
  }

  /**
   * 安装灵活布局功能
   * 1. 设置根字体大小
   * 2. 设置 `document.body` 字体大小
   * 3. 添加页面监听器
   */
  function setup() {
    if (!isClient)
      return

    setBodyFontSize()
    setRootFontSize()
    addPageListener()
  }

  /**
   * 卸载灵活布局功能
   * 1. 还原根字体大小
   * 2. 还原 `document.body` 字体大小
   * 3. 移除页面监听器
   */
  function unmount() {
    document.documentElement.style.fontSize = record.root || ''
    document.body.style.fontSize = record.body || ''
    document.removeEventListener('DOMContentLoaded', setBodyFontSize)
    removePageListener()
  }

  return {
    setup,
    unmount,
  }
}
