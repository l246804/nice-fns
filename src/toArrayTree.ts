import { orderBy } from 'lodash-unified'
import type { IfEmpty, IfNever, Simplify } from '@rhao/types-base'
import { batchUnset } from './batchUnset'
import type { _OrderByParams } from './_orderBy'

export interface ToArrayTreeOptions<
  T extends {} = {},
  Key extends string = string,
  ParentKey extends string = string,
  ChildrenKey extends string = string,
  DataKey extends string = never,
  Strict extends boolean = false,
  MappingKey extends string = string,
  MappingParentKey extends string = string,
  MappingChildrenKey extends string = string,
> {
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
   * 数据存放键，未设置时将平铺属性
   */
  dataKey?: DataKey
  /**
   * 键映射，映射后节点将必定包含映射键
   */
  keyMap?: {
    key?: MappingKey
    parentKey?: MappingParentKey
    childrenKey?: MappingChildrenKey
  }
  /**
   * 严格模式，如果设为 `true`，会去掉父子关联不存在数据，当子节点为空时将没有 `childrenKey` 和 `keyMap.childrenKey` 属性
   * @default false
   */
  strict?: Strict
  /**
   * 排序数组，依赖于 `orderBy()`
   */
  orderBy?: _OrderByParams<T>
}

type TreeNodeBase<
  T,
  Key extends keyof T,
  ParentKey extends keyof T,
  DataKey extends string,
  MappingKey extends string,
  MappingParentKey extends string,
> = Simplify<
  IfNever<DataKey, T, Record<DataKey, T>> &
  Pick<T, Key | ParentKey> &
  Record<MappingKey, T[Key]> &
  Record<MappingParentKey, T[ParentKey]>
>

type ChildrenWithStrict<T, Strict extends boolean> = Strict extends true ? T | undefined : T

type TreeNodeChildren<
  T,
  ChildrenKey extends string,
  MappingChildrenKey extends string,
> = Record<ChildrenKey | MappingChildrenKey, T>

type TreeNodeWithChildren<
  T,
  ChildrenKey extends string,
  MappingChildrenKey extends string,
  Strict extends boolean,
> = Simplify<
  Omit<T, ChildrenKey | MappingChildrenKey> &
  TreeNodeChildren<
      ChildrenWithStrict<
        TreeNodeWithChildren<T, ChildrenKey, MappingChildrenKey, Strict>[],
        Strict
      >,
      ChildrenKey,
      MappingChildrenKey
    >
>

export type TreeNode<
  T extends {} = {},
  Key extends string = string,
  ParentKey extends string = string,
  ChildrenKey extends string = string,
  DataKey extends string = never,
  Strict extends boolean = false,
  MappingKey extends string = never,
  MappingParentKey extends string = never,
  MappingChildrenKey extends string = never,
> = Simplify<
  TreeNodeWithChildren<
    TreeNodeBase<
      T,
      Key extends keyof T ? Key : never,
      ParentKey extends keyof T ? ParentKey : never,
      DataKey,
      MappingKey,
      MappingParentKey
    >,
    ChildrenKey,
    MappingChildrenKey,
    Strict
  >
>

function strictTree(array: any[], opts: ToArrayTreeOptions) {
  array.forEach((item) => {
    if (!item[opts.childrenKey!]?.length)
      batchUnset(item, [opts.childrenKey, opts.keyMap?.childrenKey].filter(Boolean) as string[])
  })
}

function setAttr(treeData: any, key?: string, value?: any) {
  if (key) treeData[key] = value
}

/**
 * 将一个层级关系的数据列表转成树结构列表
 * @param array 包含父子级关系的数组列表
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 默认树结构
 * const list = [
 *   { id: 1, name: '111' },
 *   { id: 2, parentId: 1, name: '222' },
 *   { id: 3, name: '333' },
 *   { id: 4, parentId: 2, name: '444' }
 * ]
 *
 * const tree = toArrayTree(list)
 * [
 *   {
 *     id: 1,
 *     name: '111',
 *     children: [
 *       {
 *         id: 2,
 *         name: '222',
 *         parentId: 1,
 *         children: [
 *           {
 *             id: 4,
 *             name: '444',
 *             parentId: 2,
 *             children: []
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   {
 *     id: 3,
 *     name: '333',
 *     children: []
 *   }
 * ]
 * ```
 */
export function toArrayTree<
  T extends {},
  Key extends string = 'id',
  ParentKey extends string = 'parentId',
  ChildrenKey extends string = 'children',
  DataKey extends string = never,
  Strict extends boolean = false,
  MappingKey extends string = never,
  MappingParentKey extends string = never,
  MappingChildrenKey extends string = never,
>(
  array: T[],
  options: ToArrayTreeOptions<
    T,
    Key,
    ParentKey,
    ChildrenKey,
    DataKey,
    Strict,
    MappingKey,
    MappingParentKey,
    MappingChildrenKey
  > = {},
): TreeNode<
  T,
  Key,
  ParentKey,
  IfNever<IfEmpty<ChildrenKey, never, ChildrenKey>, 'children', ChildrenKey>,
  IfEmpty<DataKey, never, DataKey>,
  Strict,
  MappingKey,
  MappingParentKey,
  MappingChildrenKey
>[] {
  // 合并配置项
  const opts = {
    key: 'id',
    parentKey: 'parentId',
    childrenKey: 'children',
    ...options,
  }

  // 浅克隆并排序数组
  if (opts.orderBy) array = orderBy(array.slice(0), ...opts.orderBy) as T[]

  const result: any[] = []
  const treeMap: Record<string, T[]> = {}
  const idsMap: Record<string, boolean> = {}
  let id, parentId, treeData: any

  // 记录 id
  array.forEach((item: any) => {
    id = item[opts.key]
    idsMap[id] = true
  })

  array.forEach((item: any) => {
    id = item[opts.key!]

    // 设置节点数据
    if (opts.dataKey) {
      treeData = {}
      treeData[opts.dataKey] = item
    }
    else {
      treeData = item
    }

    parentId = item[opts.parentKey!]

    // 记录 id 数据并构成关联关系
    treeMap[id] = treeMap[id] || []
    treeMap[parentId] = treeMap[parentId] || []
    treeMap[parentId].push(treeData)

    {
      // 填充节点基础数据
      const { key, parentKey, childrenKey } = opts
      setAttr(treeData, key, id)
      setAttr(treeData, parentKey, parentId)
      setAttr(treeData, childrenKey, treeMap[id])
    }

    // 设置映射子级属性
    if (opts.keyMap) {
      const { key, parentKey, childrenKey } = opts.keyMap
      setAttr(treeData, key, id)
      setAttr(treeData, parentKey, parentId)
      setAttr(treeData, childrenKey, treeMap[id])
    }

    // 根节点
    if ((!opts.strict || parentId == null) && !idsMap[parentId]) result.push(treeData)
  })

  // 严格模式去掉子级属性
  if (opts.strict) strictTree(array, opts as ToArrayTreeOptions)

  return result
}

if (import.meta.vitest) {
  const array = [
    { id: 1, name: '111' },
    { id: 2, parentId: 1, name: '222' },
    { id: 3, name: '333' },
    { id: 4, parentId: 2, name: '444' },
  ]
  describe('基础功能', () => {
    it('松散模式', () => {
      const tree = toArrayTree(array)
      expect(tree).toEqual([
        {
          id: 1,
          name: '111',
          children: [
            {
              id: 2,
              name: '222',
              parentId: 1,
              children: [
                {
                  id: 4,
                  name: '444',
                  parentId: 2,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: '333',
          children: [],
        },
      ])
    })

    it('严格模式', () => {
      const tree = toArrayTree(array, { strict: true })
      expect(tree).toEqual([
        {
          id: 1,
          name: '111',
          children: [
            {
              id: 2,
              name: '222',
              parentId: 1,
              children: [
                {
                  id: 4,
                  name: '444',
                  parentId: 2,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: '333',
        },
      ])
    })
  })
}
