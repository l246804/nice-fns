import type { Fn } from './_interface'
import { isPromiseLike } from './isPromiseLike'
import { assign } from './assign'

export type SerialCallReturn<T extends Fn = Fn> = ReturnType<T> extends infer R
  ? R extends PromiseLike<any>
    ? Promise<Awaited<R>>
    : R
  : never

export interface SerialCallContext<T extends Fn = Fn> {
  /**
   * 当前执行索引
   * @default -1
   */
  currentIndex: number
  /**
   * 当前执行任务总长度
   * @default 0
   */
  length: number
  /**
   * 执行参数列表
   * @default []
   */
  args: Parameters<T>
  /**
   * 上一个函数返回值
   */
  returned?: Awaited<ReturnType<T>>
  /**
   * 是否首个函数
   */
  isFirst: boolean
  /**
   * 是否末尾函数
   */
  isEnd: boolean
}

const DEFAULT_CONTEXT: SerialCallContext = {
  length: 0,
  currentIndex: -1,
  args: [],
  isEnd: false,
  isFirst: false,
  returned: undefined,
}

let runningCtx: SerialCallContext | null = null
/**
 * 获取当前执行上下文对象
 *
 * ***注意：仅支持在函数定义作用域内同步获取！***
 *
 * @example
 * ```ts
 * const fn = () => {
 *   // 传入函数类型获取类型提示
 *   const ctx = serialCall.getContext<() => number>()
 *   // 必须在异步开始前同步获取上下文对象
 *   await sleep(3000)
 *   // 返回前函数结果
 *   return ctx.returned
 * }
 * ```
 */
serialCall.getContext = function getContext<T extends Fn = Fn>() {
  return Object.assign({}, DEFAULT_CONTEXT, runningCtx) as SerialCallContext<T>
}

/**
 * 串行执行函数列表并返回最终结果，可以通过 `serialCall.getContext()` 获取执行上下文
 * @param fns 函数列表
 * @param args 参数列表
 * @returns 执行结果，存在异步函数时返回 Promise
 *
 * @example
 * ```ts
 * const fn1 = () => sleep(3000).then(() => 1)
 * const fn2 = () => serialCall.getContext().returned + 1
 * const val = await serialCall([fn1, fn2])
 * // => 2
 * ```
 */
export function serialCall<T extends Fn = Fn>(
  fns: T[],
  ...args: Parameters<T>
): SerialCallReturn<T> {
  if (fns.length === 0) {
    // @ts-expect-error 空数组时返回 undefined
    return
  }

  let ctx: SerialCallContext<T> = {
    ...DEFAULT_CONTEXT,
    length: fns.length,
    args,
  }

  const results = fns.reduce((prev: any, fn, i) => {
    const run = (val: any) => {
      assign(ctx, {
        currentIndex: i,
        returned: val,
        isFirst: i === 0,
        isEnd: i === ctx.length - 1,
      })
      runningCtx = ctx
      return fn(...args)
    }
    return isPromiseLike(prev) ? prev.then(run) : run(prev)
  }, undefined)

  isPromiseLike(results) ? results.then(cleanup, cleanup) : cleanup()
  return results

  function cleanup() {
    // @ts-expect-error 释放内存
    ctx = null
    runningCtx = null
  }
}

if (import.meta.vitest) {
  const { promiseWithControl } = await import('./promiseWithControl')

  const sleep = (ms: number) => {
    const { promise, resolve } = promiseWithControl()
    setTimeout(resolve, ms)
    return promise
  }

  describe('serialCall cases:', () => {
    it('should return Promise', () => {
      const fn1 = async () => {
        return 1
      }
      const fn2 = () => {
        return '2'
      }
      expect(serialCall([fn1, fn2])).instanceOf(Promise)
    })

    it('should return string', () => {
      const fn1 = () => {
        return 1
      }
      const fn2 = () => {
        return '2'
      }
      expect(serialCall([fn1, fn2])).toBe('2')
    })

    it('should return 3', async () => {
      type Fn = () => Promise<number> | number
      const fn1: Fn = async () => {
        // 睡眠三秒
        await sleep(3000)
        return 1
      }
      const fn2: Fn = () => {
        const ctx = serialCall.getContext<Fn>()
        return ctx.returned != null ? ctx.returned + 2 : 1
      }
      const val = await serialCall<Fn>([fn1, fn2])
      expect(val).toStrictEqual(3)
    })

    it('should return index array', async () => {
      type Fn = () => Promise<number[]> | number[]
      const fn1: Fn = async () => {
        const ctx = serialCall.getContext<Fn>()
        // 睡眠三秒
        await sleep(3000)
        return ctx.isFirst ? [ctx.currentIndex] : ctx.returned!.concat(ctx.currentIndex)
      }
      const fn2: Fn = () => {
        const ctx = serialCall.getContext<Fn>()
        return ctx.returned != null ? ctx.returned.concat(ctx.currentIndex) : [ctx.currentIndex]
      }
      const val = await serialCall<Fn>([fn1, fn2])
      expect(val).toStrictEqual([0, 1])
    })
  })
}
