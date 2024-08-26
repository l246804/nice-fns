import type { AnyFn } from '@rhao/types-base'

export type EventHookFn = AnyFn

export interface EventHookContext<T extends EventHookFn = EventHookFn> {
  currentIndex: number
  isFirst: boolean
  isEnd: boolean
  payload: Parameters<T>
  returned?: ReturnType<T>
}

type _EventHookOff = () => void
export type EventHookOn<T extends EventHookFn = EventHookFn> = (fn: T) => _EventHookOff
export type EventHookOnce<T extends EventHookFn = EventHookFn> = (fn: T) => _EventHookOff

export type EventHookOff<T extends EventHookFn = EventHookFn> = (fn: T) => void
export type EventHookOffAll = () => void

export type EventHookTrigger<T extends EventHookFn = EventHookFn> = (...args: Parameters<T>) => void

export interface EventHook<T extends EventHookFn = EventHookFn> {
  list: () => T[]
  on: EventHookOn<T>
  once: EventHookOnce<T>
  off: EventHookOff<T>
  offAll: EventHookOffAll
  trigger: EventHookTrigger<T>
}

/**
 * 创建事件钩子管理器
 *
 * @example
 * ```ts
 * const event = createEventHook()
 * const callback = () => console.log('callback run')
 *
 * // on
 * event.on(callback)
 *
 * // off
 * event.off(callback)
 *
 * // trigger
 * event.trigger()
 *
 * // list
 * event.list()
 * // => [callback]
 *
 * // offAll
 * event.offAll()
 * event.list()
 * // => []
 *
 * // 搭配 serialCall 改变执行流
 * serialCall(event.list(), ...args)
 * ```
 */
export function createEventHook<T extends AnyFn>() {
  let fns: T[] = []

  const offAll = () => {
    fns = []
  }

  const off = (fn: T) => {
    const index = fns.indexOf(fn)
    if (index !== -1)
      fns.splice(index, 1)
  }

  const on = (fn: T) => {
    fns.push(fn)
    return () => off(fn)
  }

  const once = (fn: T) => {
    let _fn: any = (...args: any[]) => {
      _fn = null
      off(_fn)
      return fn(...args)
    }
    return on(_fn)
  }

  const trigger = (...args: Parameters<T>) => {
    fns.forEach((fn) => fn(...args))
  }

  return {
    list: () => fns.slice(),
    on,
    once,
    off,
    offAll,
    trigger,
  } as EventHook<T>
}
