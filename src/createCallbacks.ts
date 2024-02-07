import type { AnyFn } from '@rhao/types-base'

/**
 * 创建回调管理器
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
export function createCallbacks<T extends AnyFn>() {
  type CallbackArgs = Parameters<T>
  type CallbackReturn = ReturnType<T>

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
   * 添加回调句柄，若句柄已存在则忽略
   * @param handler 回调句柄
   * @param prepend 是否为前置添加
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
  function add(handler: T, prepend?: boolean) {
    if (!has(handler)) prepend ? handlers.unshift(handler) : handlers.push(handler)
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
   * callbacks.run(10)
   * // => [20, 5, 0]
   * ```
   */
  function run(...args: CallbackArgs): CallbackReturn[] {
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
    reset,
  }
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const callbacks = createCallbacks<(value?: number) => string>()
    const handler = (value?: number) => {
      return String(value)
    }

    it('添加回调', () => {
      callbacks.add(handler)
      callbacks.add(handler)
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
      expect(callbacks.run(1)).toStrictEqual(['1'])
    })
  })
}
