import type { MaybeNullish } from '@rhao/types-base'

export interface BasicTreeOptions<
  Key extends string = 'id',
  ParentKey extends string = 'parentId',
  ChildrenKey extends string = 'children',
  DataKey extends string = string,
  Strict extends boolean = false,
> {
  /**
   * 严格模式，如果设为 `true`，会去掉父子关联不存在数据，当子节点为空时将没有 `childrenKey` 和 `keyMap.childrenKey` 属性
   * @default false
   */
  strict?: Strict
  /**
   * 节点键
   * @default 'id'
   */
  key?: Key
  /**
   * 父节点键
   * @default 'parentId'
   */
  parentKey?: ParentKey
  /**
   * 子节点键
   * @default 'children'
   */
  childrenKey?: ChildrenKey
  /**
   * 数据存放键，未设置时将平铺在节点上
   */
  dataKey?: DataKey
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
