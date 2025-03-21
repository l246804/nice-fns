import { resolveClientRunProfile } from './clientRun'

export interface ListenWindowResizeOptions {
  /**
   * 是否在页面从隐藏转为显示时触发一次回调
   * @default true
   */
  emitOnPageShow?: boolean
  /**
   * 是否立即启动监听器，设为 `false` 时需手动调用 `start()` 启动
   * @default true
   */
  immediate?: boolean
  /**
   * 是否立即执行一次回调
   * @default false
   */
  immediateCallback?: boolean
}

/**
 * 监听窗口大小改变事件，并触发指定回调
 * @param callback 监听回调
 * @param options 配置项
 *
 * @example
 * ```ts
 * const { stop } = listenWindowResize(() => { console.log('窗口改变了') })
 * // 需要时结束监听
 * stop()
 *
 * // 结合 `createEventHook` 使用
 * const resizeEvent = createEventHook()
 * listenWindowResize(resizeEvent.trigger)
 *
 * resizeEvent.on(() => { console.log('callback1') })
 * resizeEvent.on(() => { console.log('callback2') })
 * resizeEvent.on(() => { console.log('callback3') })
 * ```
 */
export function listenWindowResize(callback: () => void, options: ListenWindowResizeOptions = {}) {
  const { window } = resolveClientRunProfile()
  const { emitOnPageShow = true, immediate = true, immediateCallback = false } = options
  let ac: AbortController | null = null

  /**
   * 启动监听器
   */
  function start() {
    if (ac && !ac.signal.aborted) return

    ac = new AbortController()

    window.addEventListener('resize', callback, { passive: true, signal: ac.signal })
    if (emitOnPageShow) {
      window.addEventListener('pageshow', (e) => e.persisted && callback(), {
        passive: true,
        signal: ac.signal,
      })
    }

    return stop
  }

  /**
   * 停止监听器
   */
  function stop() {
    ac?.abort()
  }

  /**
   * 是否正在监听
   */
  function isListening() {
    return !!ac && !ac.signal.aborted
  }

  immediate && start()
  immediateCallback && callback()

  return {
    start,
    stop,
    isListening,
  }
}
