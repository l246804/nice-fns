import type { Fn } from './_interface'
import { isPromiseLike } from './isPromiseLike'

export interface CallWithSignalOptions<T extends Fn> {
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
export function callWithSignal<T extends Fn = Fn>(
  fn: T,
  options: CallWithSignalOptions<T> = {},
): Promise<Awaited<ReturnType<T>>> {
  const { payload = [], signal } = options
  const run = () => fn(...payload)

  let unListen = () => {}
  let freeMem = () => {
    unListen()
    // @ts-expect-error 释放内存
    unListen = null
    // @ts-expect-error 释放内存
    freeMem = null
  }

  const promise = new Promise((resolve, reject) => {
    if (signal) {
      signal.throwIfAborted()

      let callback = () => reject(signal.reason)
      signal.addEventListener('abort', callback)
      unListen = () => {
        signal.removeEventListener('abort', callback)
        // @ts-expect-error 释放内存
        callback = null
      }
    }

    const results = run()
    isPromiseLike(results) ? results.then(resolve, reject) : resolve(results)
  })

  return promise.finally(freeMem) as Promise<any>
}

if (import.meta.vitest) {
  // eslint-disable-next-line antfu/no-top-level-await
  const { sleep } = await import('./sleep')

  describe('callWithSignal cases:', () => {
    it('should return 1', async () => {
      const val = await callWithSignal(() => 1)
      expect(val).toStrictEqual(1)
    })

    it('should return abort reason', async () => {
      const ac = new AbortController()
      const fn = () => sleep(3000).then(() => 1)

      setTimeout(() => ac.abort(), 500)
      const val = await callWithSignal(fn, { signal: ac.signal }).catch((e) => e)

      expect(val).toStrictEqual(ac.signal.reason)
    })
  })
}
