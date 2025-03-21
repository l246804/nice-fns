import { isClient } from './isClient'

export interface ClientRunProfile {
  window?: Window
  document?: Document
  location?: Location
  navigator?: Navigator
}

const defaultWindow = isClient ? window : undefined

/**
 * 临时执行配置
 */
let _profile: ClientRunProfile = {}

/**
 * 获取当前执行配置（仅限同步代码）
 */
export function resolveClientRunProfile() {
  const {
    window = defaultWindow!,
    document = window?.document,
    location = window?.location,
    navigator = window?.navigator,
  } = _profile
  return { window, document, location, navigator }
}

/**
 * 在客户端中执行任务，可通过 `resolveClientRunProfile` 获取特定执行配置（仅限同步代码）
 * @param task 待执行任务
 * @param profile 执行配置，未设置默认获取当前环境配置
 *
 * @example
 * ```ts
 * // 获取窗口大小
 * function getWindowSize() {
 *   const { window } = resolveClientRunProfile()
 *   return { width: window.innerWidth, height: window.innerHeight }
 * }
 *
 * // 新开窗口
 * const win = window.open(...)
 *
 * // 获取新窗口大小
 * clientRun(getWindowSize, { window: win.window })
 * ```
 */
export function clientRun<R = void>(task: () => R, profile: ClientRunProfile = {}) {
  try {
    _profile = profile
    return task()
  }
  finally {
    _profile = {}
  }
}
