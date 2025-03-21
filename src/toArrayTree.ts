import type { IfNever, MaybeFn, ReplaceEmpty, ReplaceNever } from './_interface'
import { orderBy } from 'es-toolkit'
import { batchUnset } from './batchUnset'
import { castFunction } from './castFunction'

export interface ToArrayTreeOptions<
  T extends {} = {},
  Key extends string = string,
  ParentKey extends string = string,
  ChildrenKey extends string = string,
  DataKey extends string = never,
  RemoveEmptyChildrenKey extends boolean = false,
  MappingKey extends string = string,
  MappingParentKey extends string = string,
  MappingChildrenKey extends string = string,
  Strict extends boolean = false,
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
   * 是否移除空子节点属性，设为 `true` 时当子节点为空将没有 `childrenKey` 和 `keyMap.childrenKey` 属性
   * @default options.strict
   */
  removeEmptyChildrenKey?: MaybeFn<
    RemoveEmptyChildrenKey,
    [
      node: TreeNode<
        T,
        Key,
        ParentKey,
        ChildrenKey,
        DataKey,
        false,
        MappingKey,
        MappingParentKey,
        MappingChildrenKey
      >,
    ]
  >
  /**
   * 严格模式，如果设为 `true`，会去掉父子关联不存在数据
   * @default false
   */
  strict?: Strict
  /**
   * 排序数组，依赖于 `orderBy()`
   */
  orderBy?: [(keyof T | ((item: T) => unknown))[], Array<'asc' | 'desc'>]
}

type TreeNodeBase<
  T,
  Key extends keyof T,
  ParentKey extends keyof T,
  DataKey extends string,
  MappingKey extends string,
  MappingParentKey extends string,
> = IfNever<DataKey, T, Record<DataKey, T>> &
  Pick<T, Key | ParentKey> &
  Record<MappingKey, T[Key]> &
  Record<MappingParentKey, T[ParentKey]>

type ChildrenWithStrict<T, Strict extends boolean> = Strict extends false ? T : T | undefined

type TreeNodeChildren<T, ChildrenKey extends string, MappingChildrenKey extends string> = Record<
  ChildrenKey | MappingChildrenKey,
  T
>

type TreeNodeWithChildren<
  T,
  ChildrenKey extends string,
  MappingChildrenKey extends string,
  RemoveEmptyChildrenKey extends boolean,
> = Omit<T, ChildrenKey | MappingChildrenKey> &
  TreeNodeChildren<
    ChildrenWithStrict<
      TreeNodeWithChildren<T, ChildrenKey, MappingChildrenKey, RemoveEmptyChildrenKey>[],
      RemoveEmptyChildrenKey
    >,
    ChildrenKey,
    MappingChildrenKey
  >

export type TreeNode<
  T extends {} = {},
  Key extends string = string,
  ParentKey extends string = string,
  ChildrenKey extends string = string,
  DataKey extends string = never,
  RemoveEmptyChildrenKey extends boolean = false,
  MappingKey extends string = never,
  MappingParentKey extends string = never,
  MappingChildrenKey extends string = never,
> = TreeNodeWithChildren<
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
  RemoveEmptyChildrenKey
>

function processTree(array: any[], opts: ToArrayTreeOptions) {
  const { removeEmptyChildrenKey = opts.strict } = opts
  const removeEmptyChildrenKeyFn = castFunction(removeEmptyChildrenKey)

  array.forEach((item) => {
    if (!item[opts.childrenKey!]?.length && removeEmptyChildrenKeyFn(item))
      batchUnset(item, [opts.childrenKey, opts.keyMap?.childrenKey].filter(Boolean) as string[])
  })
}

function setAttr(treeData: any, key?: string, value?: any) {
  if (key)
    treeData[key] = value
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
  RemoveEmptyChildrenKey extends boolean = never,
  MappingKey extends string = never,
  MappingParentKey extends string = never,
  MappingChildrenKey extends string = never,
  Strict extends boolean = false,
>(
  array: T[],
  options: ToArrayTreeOptions<
    T,
    Key,
    ParentKey,
    ChildrenKey,
    DataKey,
    ReplaceNever<RemoveEmptyChildrenKey, Strict>,
    MappingKey,
    MappingParentKey,
    MappingChildrenKey,
    Strict
  > = {},
): TreeNode<
    T,
    Key,
    ParentKey,
    ReplaceNever<ReplaceEmpty<ChildrenKey, never>, 'children'>,
    ReplaceEmpty<DataKey, never>,
    ReplaceNever<RemoveEmptyChildrenKey, Strict>,
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
  if (opts.orderBy)
    array = orderBy(array.slice(0), ...opts.orderBy) as T[]

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
    if ((!opts.strict || parentId == null) && !idsMap[parentId])
      result.push(treeData)
  })

  // 处理树
  processTree(array, opts as ToArrayTreeOptions)

  return result
}

if (import.meta.vitest) {
  const array = [
    { id: 1, name: '111' },
    { id: 2, parentId: 1, name: '222' },
    { id: 3, name: '333' },
    { id: 4, parentId: 2, name: '444' },
    { id: 5, parentId: 10, name: '555' },
  ]
  describe('基础功能', () => {
    it('松散模式', () => {
      const tree = toArrayTree(_.cloneDeep(array))
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
        {
          id: 5,
          parentId: 10,
          name: '555',
          children: [],
        },
      ])
    })

    it('严格模式', () => {
      const tree = toArrayTree(_.cloneDeep(array), { strict: true })
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

    it('移除空子级属性', () => {
      const tree = toArrayTree(_.cloneDeep(array), { removeEmptyChildrenKey: true })
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
        {
          id: 5,
          parentId: 10,
          name: '555',
        },
      ])
    })
  })
}
