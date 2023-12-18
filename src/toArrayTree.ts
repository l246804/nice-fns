import { orderBy } from 'lodash-unified'
import type { IfEmpty, IfNever, KeyOf, MaybeArray, Recordable } from '@rhao/types-base'
import type { BasicTreeOptions } from './tree'
import { batchUnset } from './batchUnset'

export interface ToArrayTreeOptions<
  T extends Recordable = Recordable,
  Key extends KeyOf<T> = KeyOf<T>,
  ParentKey extends KeyOf<T> = KeyOf<T>,
  ChildrenKey extends string = never,
  DataKey extends string = never,
  Strict extends boolean = boolean,
> extends BasicTreeOptions<Key, ParentKey, ChildrenKey, DataKey, Strict> {
  /**
   * 键映射，映射后节点将必定包含映射键
   */
  keyMap?: Pick<BasicTreeOptions, 'key' | 'parentKey' | 'childrenKey'>
  /**
   * 排序数组，依赖于 `orderBy()`
   */
  orderBy?: [iterates?: MaybeArray<keyof T>, orders?: MaybeArray<'asc' | 'desc'>]
}

type TreeNodeWithDataKey<
  T,
  Key extends KeyOf<T>,
  ParentKey extends KeyOf<T>,
  DataKey extends string,
> = IfNever<
  IfEmpty<DataKey, never>,
  T,
  Recordable<T, DataKey> &
  Pick<T, Key extends keyof T ? Key : never> &
  Pick<T, ParentKey extends keyof T ? ParentKey : never>
> &
Recordable

type TreeNodeChildren<T, Strict extends boolean = boolean> = Strict extends true ? T | undefined : T

type TreeNodeWithChildren<
  T extends Recordable,
  ChildrenKey extends string,
  Strict extends boolean,
> = IfNever<
  ChildrenKey,
  T & Recordable<TreeNodeChildren<TreeNodeWithChildren<T, 'children', Strict>[], Strict>>,
  IfEmpty<
    ChildrenKey,
    T,
    T &
    Recordable<
        TreeNodeChildren<TreeNodeWithChildren<T, ChildrenKey, Strict>[], Strict>,
        ChildrenKey
      >
  >
>

export type TreeNode<
  T extends Recordable = Recordable,
  Key extends KeyOf<T> = KeyOf<T>,
  ParentKey extends KeyOf<T> = KeyOf<T>,
  ChildrenKey extends string = 'children',
  DataKey extends string = never,
  Strict extends boolean = boolean,
> = TreeNodeWithChildren<TreeNodeWithDataKey<T, Key, ParentKey, DataKey>, ChildrenKey, Strict>

function strictTree(array: any[], opts: ToArrayTreeOptions<any, any, any, any, any, boolean>) {
  array.forEach((item) => {
    if (!item[opts.childrenKey]?.length)
      batchUnset(item, [opts.childrenKey, opts.keyMap?.childrenKey].filter(Boolean))
  })
}

function setAttr(treeData: Recordable, key?: string, value?: any) {
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
  T extends Recordable = Recordable,
  Key extends KeyOf<T> = KeyOf<T>,
  ParentKey extends KeyOf<T> = KeyOf<T>,
  ChildrenKey extends string = 'children',
  DataKey extends string = never,
  Strict extends boolean = boolean,
>(array: T[], options: ToArrayTreeOptions<T, Key, ParentKey, ChildrenKey, DataKey, Strict> = {}) {
  // 合并配置项
  const opts = {
    key: 'id',
    parentKey: 'parentId',
    childrenKey: 'children',
    ...options,
  }

  // 浅克隆并排序数组
  if (opts.orderBy) array = orderBy(array.slice(0), ...opts.orderBy) as T[]

  const result: T[] = []
  const treeMap: Recordable<T[]> = {}
  const idsMap: Recordable<boolean> = {}
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
  if (opts.strict) strictTree(array, opts)

  return result as TreeNode<T, Key, ParentKey, ChildrenKey, DataKey, Strict>[]
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
