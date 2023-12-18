import type { AnyFn } from '@rhao/types-base'
import { isFunction } from 'lodash-unified'

export interface CreateCallbacksOptions {
  /**
   * 回调函数是否唯一
   */
  unique?: boolean
}

/**
 * 创建回调管理器
 * @param options 配置项
 * @returns 回调管理器
 *
 * @example
 * ```ts
 * const callbacks = createCallbacks()
 * const handler = () => console.log('callback run')
 *
 * // add
 * callbacks.add(handler)
 *
 * // remove
 * callbacks.remove(handler)
 *
 * // run
 * callbacks.run(0)
 *
 * // runAll
 * callbacks.runAll()
 *
 * // list
 * callbacks.list()
 * // => [handler]
 *
 * // reset
 * callbacks.reset()
 * callbacks.list()
 * // => []
 * ```
 */
export function createCallbacks<T extends AnyFn, Args extends any[] = Parameters<T>>(
  options: CreateCallbacksOptions = {},
) {
  const { unique = false } = options
  let handlers: T[] = []

  /**
   * 判断回调句柄是否已注册
   * @param handler 回调句柄
   *
   * @example
   * ```ts
   * const callbacks = createCallbacks()
   * const handler = () => {
   *   console.log('callback run')
   * }
   * callbacks.add(handler)
   *
   * callbacks.has(handler)
   * // => true
   * ```
   */
  function has(handler: T) {
    return handlers.includes(handler)
  }

  /**
   * 注册回调句柄
   * @param handler 回调句柄
   * @returns 移除回调句柄
   *
   * @example
   * ```ts
   * const callbacks = createCallbacks()
   * const remove = callbacks.add(() => {
   *   console.log('callback run')
   * })
   * remove()
   * ```
   */
  function add(handler: T) {
    if (!unique || !has(handler)) handlers.push(handler)
    return () => remove(handler)
  }

  /**
   * 移除回调句柄
   * @param callback 回调句柄
   *
   * @example
   * ```ts
   * const callbacks = createCallbacks()
   * const handler = () => {
   *   console.log('callback run')
   * }
   * callbacks.add(handler)
   *
   * remove(handler)
   * ```
   */
  function remove(callback: T) {
    const index = handlers.indexOf(callback)
    if (index > -1) handlers.splice(index, 1)
  }

  /**
   * 获取回调句柄列表（副本）
   * @returns 回调句柄列表
   */
  function list() {
    return handlers.slice()
  }

  /**
   * 运行单个回调句柄
   * @param value 回调句柄或索引
   * @param args 回调参数
   * @returns 回调结果
   *
   * @example
   * ```ts
   * const callbacks = createCallbacks()
   * callbacks.add((value: number) => value * 2)
   *
   * callbacks.run(0, 10)
   * // => 20
   *
   * callbacks.run(0, 100)
   * // => 200
   * ```
   */
  function run(value: T | number, ...args: Args): ReturnType<T> | undefined {
    const handler = isFunction(value) ? value : handlers[value]
    if (isFunction(handler)) return handler(...args)
  }

  /**
   * 运行全部回调句柄
   * @param args 回调参数
   * @returns 回调结果列表
   *
   * @example
   * ```ts
   * const callbacks = createCallbacks()
   * callbacks.add((value: number) => value * 2)
   * callbacks.add((value: number) => value / 2)
   * callbacks.add((value: number) => value % 2)
   *
   * callbacks.runAll(10)
   * // => [20, 5, 0]
   *
   * callbacks.run(0, 100)
   * // => [200, 50, 0]
   * ```
   */
  function runAll(...args: Args): ReturnType<T>[] {
    return handlers.map((handler) => handler(...args))
  }

  /**
   * 清空回调句柄
   */
  function reset() {
    handlers = []
  }

  return {
    has,
    add,
    remove,
    list,
    run,
    runAll,
    reset,
  }
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const callbacks = createCallbacks()
    const handler = <T>(value: T) => {
      return value
    }

    it('添加回调', () => {
      callbacks.add(handler)
      expect(callbacks.has(handler)).toBe(true)
      expect(callbacks.list()).toStrictEqual([handler])
    })

    it('删除回调', () => {
      callbacks.remove(handler)
      expect(callbacks.list().length).toBe(0)
      expect(callbacks.has(handler)).toBe(false)
      callbacks.add(handler)
    })

    it('执行回调', () => {
      expect(callbacks.run(handler)).toBe(undefined)
      expect(callbacks.run(handler, 1)).toBe(1)
      expect(callbacks.run(handler, 'test')).toBe('test')

      expect(callbacks.runAll(true)).toStrictEqual([true])
    })
  })
}
