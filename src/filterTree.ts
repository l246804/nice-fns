import type { Recordable } from '@rhao/types-base'
import { eachTree } from './eachTree'
import type { BasicTreeOptions, TreeIterator } from './tree'

export interface FilterTreeOptions extends Pick<BasicTreeOptions, 'childrenKey'> {}

/**
 * 根据迭代器过滤树列表的子项数据，仅返回符合过滤规则的节点列表
 * @param array 树列表
 * @param iterator 迭代器
 * @param options 配置项
 *
 * @example
 * ```ts
 * filterTree(
 *   [
 *     {
 *       id: 1,
 *       text: '1',
 *       children: [
 *         {
 *           id: 3,
 *           text: '3',
 *         }
 *       ]
 *     },
 *     {
 *       id: 2,
 *       text: '2',
 *     }
 *   ],
 *   (node) => node.id >= 2,
 * )
 * // => [{ id: 3, text: '3', }, { id: 2, text: '3', }]
 * ```
 */
export function filterTree<T extends Recordable = Recordable>(
  array: T[],
  iterator: TreeIterator<T, boolean>,
  options: BasicTreeOptions = {},
) {
  const result: T[] = []
  eachTree(
    array,
    (node, ...args) => {
      if (iterator.call(array, node, ...args)) result.push(node)
    },
    options,
  )
  return result
}

if (import.meta.vitest) {
  const tree = [
    {
      id: 1,
      text: '1',
      subs: [
        {
          id: 3,
          text: '3',
        },
      ],
    },
    {
      id: 2,
      text: '2',
    },
  ]

  it('过滤树节点', () => {
    const result = filterTree(
      tree,
      (node) => node.id >= 2,
      { childrenKey: 'subs' },
    ).map((node) => node.id)

    expect(result).toStrictEqual([3, 2])
  })
}
