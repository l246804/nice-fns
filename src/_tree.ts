import type { Fn, MaybeNullish } from '@rhao/types-base'
import { assign } from 'lodash-unified'
import { type BasicTreeOptions, type TreeIterator, treeDefaults } from './tree'

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

export type HelperCreateTreeFuncResult<O, IR, R> = <T extends object>(
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
  return function (array, iterator, options) {
    const opts = assign({}, treeDefaults, options)
    return handler(array, iterator, null, [], [], opts.childrenKey || 'children', opts)
  }
}
