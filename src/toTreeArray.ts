import type { IfEmpty, IfNever, Simplify } from '@rhao/types-base'
import { batchUnset } from './batchUnset'

export interface ToTreeArrayOptions<
  DataKey extends string = never,
  DropKeys extends string = never,
> {
  /**
   * 子节点键
   * @default 'children'
   */
  childrenKey?: string
  /**
   * 数据存放键
   */
  dataKey?: DataKey
  /**
   * 需要放弃的键，设置后将会移除对应键，例如节点上的 `children` 或其他。
   */
  dropKeys?: DropKeys[]
}

type ArrayItemBase<T extends {}, DataKey extends keyof T> = IfNever<DataKey, T, T[DataKey]>

type ArrayItemWithDropKeys<T, DropKeys extends string> = Omit<T, DropKeys>

export type ArrayItem<
  T extends {} = {},
  DataKey extends keyof T = never,
  DropKeys extends string = never,
> = Simplify<ArrayItemWithDropKeys<ArrayItemBase<T, DataKey>, DropKeys>>

function unTreeList<T extends {}, DataKey extends keyof T, DropKeys extends string>(
  result: T[],
  array: T[],
  opts: ToTreeArrayOptions<DataKey extends string ? DataKey : never, DropKeys>,
) {
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

  return result as unknown as ArrayItem<
    T,
    IfEmpty<DataKey, never, DataKey>,
    IfEmpty<DropKeys, never, DropKeys>
  >[]
}

/**
 * 将一个树结构列表转成数组列表
 * @param array 树结构数组列表
 * @param options 配置项
 */
export function toTreeArray<
  T extends {},
  DataKey extends keyof T = never,
  DropKeys extends string = never,
>(
  array: T[],
  options: ToTreeArrayOptions<DataKey extends string ? DataKey : never, DropKeys> = {},
) {
  return unTreeList<T, DataKey, DropKeys>([], array, {
    childrenKey: 'children',
    ...options,
  })
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
