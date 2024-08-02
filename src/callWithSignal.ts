import type { AnyFn } from '@rhao/types-base'
import { promiseWithControl } from './promiseWithControl'

export interface CallWithSignalOptions<T extends AnyFn> {
  /**
   * 函数载荷列表
   */
  payload?: Parameters<T>
  /**
   * AbortSignal 实例
   */
  signal?: AbortSignal
}

/**
 * 支持通过 `AbortSignal` 控制函数终止
 * @param fn 待执行函数
 * @param options 配置项
 *
 * @example
 * ```ts
 * const fn = () => sleep(3000).then(() => 1)
 * const controller = new AbortController()
 *
 * callWithSignal(fn, { signal: controller.signal })
 *   .then(console.log)
 *   .catch((e) => console.log('error:', e.message))
 *
 * controller.abort()
 * // 'error: signal is aborted without reason'
 * ```
 */
export function callWithSignal<T extends AnyFn = AnyFn>(
  fn: T,
  options: CallWithSignalOptions<T> = {},
): Promise<Awaited<ReturnType<T>>> {
  const { payload = [], signal } = options
  const { promise, resolve, reject } = promiseWithControl<any>()

  let run = () => {
    // @ts-expect-error 释放内存
    run = null
    try {
      return fn(...payload)
    }
    catch (e) {
      reject(e)
    }
  }

  if (!signal) {
    resolve(run())
  }
  else if (signal.aborted) {
    reject(signal.reason)
  }
  else {
    let unListen = listenAbort(signal, reject)
    promise.finally(() => {
      unListen()
      // @ts-expect-error 释放内存
      unListen = null
    })

    let result = run()
    if (result instanceof Promise)
      result.then(resolve, reject)
    else resolve(result)

    result = null
  }

  return promise

  function listenAbort(signal: AbortSignal, callback: (e: Error) => void) {
    if (signal) {
      const _callback = () => callback(signal.reason)
      signal.addEventListener('abort', _callback, { passive: true })
      return () => signal.removeEventListener('abort', _callback)
    }
    return () => {}
  }
}
