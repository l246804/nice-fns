import type { MaybeNil } from './_interface'

export type TreeIterator<T, R = void> = (
  /**
   * 当前节点
   */
  node: T,
  /**
   * 节点在当前层的索引
   */
  index: number,
  /**
   * 父级节点
   */
  parent: MaybeNil<T>,
  /**
   * 路径链路
   */
  paths: string[],
  /**
   * 路径节点
   */
  nodes: T[],
  /**
   * 树集合
   */
  tree: T[],
) => R
