import type { AnyFn } from '@rhao/types-base'

export type HasPromise<F extends readonly AnyFn[]> = F extends [infer Head, ...infer _F]
  ? Head extends (...args: any[]) => Promise<any> | PromiseLike<any>
    ? true
    : _F extends AnyFn[]
      ? HasPromise<_F>
      : false
  : false
