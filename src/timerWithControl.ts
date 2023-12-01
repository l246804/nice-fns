import type { MaybeGetter, NoopFn } from '@rhao/types-base'
import { createSwitch } from './createSwitch'
import { isClient } from './isClient'
import { toValue } from './toValue'

export interface TimerWithControlOptions {
  /**
   * 延迟时间，单位：`ms`，小于等于 `0` 时不会开启定时器，若 `timerType='requestAnimation'`，则此参数无效
   * @default 0
   */
  ms?: MaybeGetter<number>
  /**
   * 启动定时器时立即执行一次回调
   * @default false
   */
  immediateCallback?: boolean
  /**
   * 定时器类型
   * - `setTimeout`: 仅执行一次回调
   * - `setInterval`: 循环执行回调，直到手动调用 `stop()`
   * - `requestAnimationFrame`: 循环执行回调，直到手动调用 `stop()`，非客户端环境时降级为 `setTimeout(fn, 16)`
   * @default 'setTimeout'
   */
  type?: 'setTimeout' | 'setInterval' | 'requestAnimationFrame'
}

/**
 * 创建可控的定时器
 *
 * ***注意：不支持自动执行回调，需手动调用 `start()` 或 `flush()` 执行回调！***
 *
 * @param callback 回调句柄
 * @param options 配置项
 *
 * @example
 * ```ts
 * const timer = timerWithControl(() => {
 *   console.log(Date.now())
 * })
 *
 * // 启动定时器
 * timer.start()
 *
 * // 停止定时器
 * timer.stop()
 *
 * // 停止定时器并立即执行回调
 * timer.flush()
 * ```
 */
export function timerWithControl(callback: NoopFn, options: TimerWithControlOptions = {}) {
  const { immediateCallback = false, ms = 0, type = 'setTimeout' } = options

  type TimerFn = (callback: () => void, ms?: number) => any
  type ClearTimerFn = (id: any) => void

  let timer: any, timerFn: TimerFn, clearTimerFn: ClearTimerFn
  switch (type) {
    case 'requestAnimationFrame':
      timerFn = isClient ? requestAnimationFrame : (fn) => setTimeout(fn, 16)
      clearTimerFn = isClient ? cancelAnimationFrame : clearTimeout
      break
    case 'setTimeout':
      timerFn = setTimeout
      clearTimerFn = clearTimeout
      break
    case 'setInterval':
    default:
      timerFn = setInterval
      clearTimerFn = clearInterval
      break
  }

  const [isActive, active] = createSwitch()

  function wrapCallback() {
    callback()
    if (type === 'setTimeout') active.close()
    if (type === 'requestAnimationFrame') start()
  }

  function clean() {
    if (timer) {
      clearTimerFn(timer)
      timer = null
    }
  }

  function start() {
    const msValue = toValue(ms)
    if (type !== 'requestAnimationFrame' && msValue <= 0) return active.close()

    active.open()
    if (immediateCallback) callback()

    clean()
    timer = timerFn(wrapCallback, type !== 'requestAnimationFrame' ? msValue : undefined)
  }

  function stop() {
    active.close()
    clean()
  }

  function flush() {
    stop()
    callback()
  }

  return {
    /**
     * 判断定时器是否处于激活状态
     */
    isActive,
    /**
     * 启动定时器
     */
    start,
    /**
     * 停止定时器
     */
    stop,
    /**
     * 停止定时器并立即执行回调
     */
    flush,
  }
}

if (import.meta.vitest) {
  describe('基础功能', async () => {
    const sleep = (ms: number) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, ms)
    })

    it('启动定时器', async () => {
      const callback = vi.fn()
      const timer = timerWithControl(callback, { ms: 100 })

      timer.start()
      await sleep(1000)
      expect(callback).toHaveBeenCalled()
    })

    it('停止定时器', async () => {
      const callback = vi.fn()
      const timer = timerWithControl(callback, { ms: 1000 })

      timer.start()
      await sleep(500)
      timer.stop()
      expect(callback).toHaveBeenCalledTimes(0)
    })

    it('停止定时器并立即执行回调', async () => {
      const callback = vi.fn()
      const timer = timerWithControl(callback, { ms: 1000 })

      timer.start()
      await sleep(500)
      timer.flush()
      expect(callback).toHaveBeenCalledOnce()
    })
  })
}
