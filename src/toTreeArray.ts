import { assign } from 'lodash-unified'
import type { IfEmpty, IfNever, KeyOf, Recordable } from '@rhao/types-base'
import type { BasicTreeOptions } from './tree'
import { treeDefaults } from './tree'
import { batchUnset } from './batchUnset'

export interface ToTreeArrayOptions<
  T extends Recordable = Recordable,
  ChildrenKey extends KeyOf<T> = KeyOf<T>,
  DataKey extends string = never,
  DropKeys extends string = never,
> extends Pick<BasicTreeOptions<string, string, ChildrenKey, DataKey>, 'childrenKey' | 'dataKey'> {
  /**
   * 需要放弃的键，设置后将会移除对应键，例如节点上的 `children` 或其他。
   */
  dropKeys?: DropKeys[]
}

function unTreeList<
  T extends Recordable,
  ChildrenKey extends KeyOf<T>,
  DataKey extends string,
  DropKeys extends string,
>(result: T[], array: T[], opts: ToTreeArrayOptions<T, ChildrenKey, DataKey, DropKeys>) {
  array.forEach((item: any) => {
    // 获取子级列表
    const children = item[opts.childrenKey!]

    // 取出原始数据
    if (opts.dataKey) item = item[opts.dataKey]

    // 将数据添加进结果，若存在子级列表则递归遍历
    result.push(item)
    if (children?.length) unTreeList(result, children, opts)

    // 移除数据上的键
    if (opts.dropKeys) batchUnset(item, opts.dropKeys)
  })

  return result as IfNever<
    IfEmpty<DataKey, never>,
    Omit<T, IfEmpty<DropKeys, never>>,
    Omit<T, IfEmpty<DropKeys, never>> & Record<DataKey, T>
  >[]
}

/**
 * 将一个树结构列表转成数组列表
 * @param array 树结构数组列表
 * @param options 配置项
 */
export function toTreeArray<
  T extends Recordable = Recordable,
  ChildrenKey extends KeyOf<T> = KeyOf<T>,
  DataKey extends string = never,
  DropKeys extends string = never,
>(array: T[], options?: ToTreeArrayOptions<T, ChildrenKey, DataKey, DropKeys>) {
  return unTreeList<T, ChildrenKey, DataKey, DropKeys>([], array, assign({}, treeDefaults, options))
}

if (import.meta.vitest) {
  const tree = [
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
  ]
  const array = [
    { id: 1, name: '111', children: [] },
    { id: 2, parentId: 1, name: '222', children: [] },
    { id: 4, parentId: 2, name: '444', children: [] },
    { id: 3, name: '333', children: [] },
  ]
  array[0].children.push(array[1] as never)
  array[1].children.push(array[2] as never)

  describe('基础功能', () => {
    it('正常转换', () => {
      expect(toTreeArray(tree)).toStrictEqual(array.slice(0))
    })

    it('移除 children 属性', () => {
      expect(toTreeArray(tree, { dropKeys: ['children'] })).toStrictEqual(
        array.slice(0).map((item) => {
          _.unset(item, 'children')
          return item
        }),
      )
    })
  })
}
