import type { Fn, MaybeNullish, Recordable } from '@rhao/types-base'
import type { BasicTreeOptions, TreeIterator } from './tree'

export type HelperCreateTreeFuncHandler<O extends BasicTreeOptions, R = void, IR = R> = Fn<
  [
    tree: any[],
    iter: TreeIterator<any, IR>,
    parent: MaybeNullish<any>,
    paths: string[],
    nodes: any[],
    childrenKey: string,
    options: O,
  ],
  R
>

export type HelperCreateTreeFuncResult<O, IR, R> = <T extends Recordable = Recordable>(
  array: T[],
  iterator: TreeIterator<T, IR>,
  options?: O,
) => R

export function helperCreateTreeFunc<
  H extends HelperCreateTreeFuncHandler<any, any, any>,
  O extends BasicTreeOptions = H extends HelperCreateTreeFuncHandler<infer HO, any, any> ? HO : any,
  IR = H extends HelperCreateTreeFuncHandler<any, any, infer HIR> ? HIR : any,
  R = H extends HelperCreateTreeFuncHandler<any, infer HR, any> ? HR : any,
>(handler: H): HelperCreateTreeFuncResult<O, IR, R> {
  return function (array, iterator, options = {} as O) {
    const opts = {
      key: 'id',
      parentKey: 'parentId',
      childrenKey: 'children',
      ...options,
    }
    return handler(array, iterator, null, [], [], opts.childrenKey || 'children', opts)
  }
}
