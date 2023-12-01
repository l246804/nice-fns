import type { MaybeNullish } from '@rhao/types-base'

export interface BasicTreeOptions<DataKey extends string = string> {
  /**
   * 严格模式，如果设为 `true`，会去掉父子关联不存在数据，当子节点为空时将没有 `childrenKey` 和 `keyMap.childrenKey` 属性
   * @default false
   */
  strict?: boolean
  /**
   * 节点键
   * @default 'id'
   */
  key?: string
  /**
   * 父节点键
   * @default 'parentId'
   */
  parentKey?: string
  /**
   * 子节点键
   * @default 'children'
   */
  childrenKey?: string
  /**
   * 数据存放键，未设置时将平铺在节点上
   */
  dataKey?: DataKey

  [K: string]: any
}

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
  parent: MaybeNullish<T>,
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

/**
 * 树形默认配置项
 */
export const treeDefaults: BasicTreeOptions = {
  key: 'id',
  parentKey: 'parentId',
  childrenKey: 'children',
}
