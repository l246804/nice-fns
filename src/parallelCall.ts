import type { AnyFn, IfTrue } from '@rhao/types-base'
import { isPromiseLike } from './isPromiseLike'
import type { HasPromise } from './_caller'

export type ParallelCallReturn<F extends readonly AnyFn[] = []> = {
  -readonly [K in keyof F]: Awaited<ReturnType<F[K]>>
} extends infer R
  ? IfTrue<HasPromise<F>, Promise<R>, R>
  : []

/**
 * 并行执行函数列表并返回所有结果
 * @param fns 函数列表
 * @param args 参数列表
 * @returns 执行结果列表，存在异步函数时返回 Promise
 *
 * @example
 * ```ts
 * const fn1 = () => sleep(3000).then(() => 1)
 * const fn2 = () => 2
 * parallelCall([fn1, fn2])
 * // => Promise { [1, 2] }
 *
 * const fn1 = () => 1
 * const fn2 = () => 2
 * parallelCall([fn1, fn2])
 * // => [1, 2]
 * ```
 */
export function parallelCall<const F extends AnyFn[] = []>(
  fns: F,
  ...args: Parameters<F[number]>
): ParallelCallReturn<F> {
  let hasPromise = false
  const results = fns.map((fn) => {
    const val = fn(...args)
    if (!hasPromise && isPromiseLike(val))
      hasPromise = true
    return val
  })
  return (hasPromise ? Promise.all(results) : results) as ParallelCallReturn<F>
}

if (import.meta.vitest) {
  describe('parallelCall cases:', () => {
    it('should return Promise', () => {
      const fn1 = async () => {
        return 1
      }
      const fn2 = () => {
        return '2'
      }
      expect(parallelCall([fn1, fn2])).instanceOf(Promise)
    })

    it('should return array', () => {
      const fn1 = () => {
        return 1
      }
      const fn2 = () => {
        return '2'
      }
      expect(parallelCall([fn1, fn2])).instanceOf(Array)
    })
  })
}
