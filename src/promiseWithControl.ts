/**
 * 创建可控的 `promise`
 *
 * @example
 * ```ts
 * const { promise, resolve } = promiseWithControl()
 *
 * function run() {
 *   // 竟态执行
 *   return Promise.race([promise, sleep(10e3)])
 * }
 *
 * run()
 * // 中断运行，直接结束
 * resolve()
 * ```
 */
export function promiseWithControl<T>() {
  const controls = {
    resolve: undefined as unknown as (value?: T | PromiseLike<T>) => void,
    reject: undefined as unknown as (reason?: any) => void,
  }
  const promise = new Promise<T>((resolve, reject) => {
    controls.resolve = resolve as any
    controls.reject = reject
  })
  return {
    promise,
    ...controls,
  }
}

if (import.meta.vitest) {
  it('竟态执行', async () => {
    const discardedFlag = Symbol('discarded')
    const { promise, resolve } = promiseWithControl()

    function request() {
      return new Promise((_resolve) => {
        setTimeout(() => {
          _resolve(true)
        }, 3000)
      })
    }

    function run() {
      return Promise.race([promise, request()])
    }

    function end() {
      resolve(discardedFlag)
    }

    setTimeout(() => {
      end()
    }, 1000)

    const result = await run()
    expect(result).toBe(discardedFlag)
  })
}
