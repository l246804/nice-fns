import type { Fn } from '@rhao/types-base'
import type { TreeIterator } from './tree'

export type HelperCreateTreeFuncHandler<O extends {} = {}, R = void, IR = R> = Fn<
  [
    tree: any[],
    iter: TreeIterator<any, IR>,
    parent: any,
    paths: string[],
    nodes: any[],
    childrenKey: string,
    options: O,
  ],
  R
>

export type HelperCreateTreeFuncResult<O, IR, R> = <T extends {}>(
  array: T[],
  iterator: TreeIterator<T, IR>,
  options?: O,
) => R

export function helperCreateTreeFunc<
  H extends HelperCreateTreeFuncHandler<any, any, any>,
  O = H extends HelperCreateTreeFuncHandler<infer HO, any, any> ? HO : {},
  IR = H extends HelperCreateTreeFuncHandler<any, any, infer HIR> ? HIR : void,
>(handler: H) {
  return function <T extends {}>(array: T[], iterator: TreeIterator<T, IR>, options = {} as O) {
    const opts = {
      key: 'id',
      parentKey: 'parentId',
      childrenKey: 'children',
      ...options,
    }
    return handler(array, iterator, undefined, [], [], opts.childrenKey, opts)
  }
}
