import { isClient } from './isClient'

export interface ClientRunProfile {
  window?: Window
  document?: Document
  location?: Location
  navigator?: Navigator
}

/**
 * 默认执行配置
 */
clientRun.defaults = {
  window: isClient ? window : undefined,
  document: isClient ? window.document : undefined,
  location: isClient ? window.location : undefined,
  navigator: isClient ? window.navigator : undefined,
} as Readonly<Required<ClientRunProfile>>

/**
 * 临时执行配置
 */
let _profile: ClientRunProfile = {}

/**
 * 获取当前执行配置（仅限同步代码）
 */
clientRun.resolveProfile = function () {
  const {
    window = clientRun.defaults.window,
    document = window?.document,
    location = window?.location,
    navigator = window?.navigator,
  } = _profile
  return { window, document, location, navigator }
}

/**
 * 在客户端中执行任务，可通过 `resolveProfile` 获取特定执行配置（仅限同步代码）
 * @param task 待执行任务
 * @param profile 执行配置，未设置默认获取当前环境配置
 *
 * @example
 * ```ts
 * // 获取窗口大小
 * function getWindowSize() {
 *   const { window } = clientRun.resolveProfile()
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
