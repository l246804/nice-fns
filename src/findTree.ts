import type { MaybeNullish, Recordable } from '@rhao/types-base'
import type { BasicTreeOptions, TreeIterator } from './tree'
import type { HelperCreateTreeFuncHandler } from './_tree'
import { helperCreateTreeFunc } from './_tree'

export interface FindTreeOptions extends Pick<BasicTreeOptions, 'childrenKey'> {}

export interface FindResult<T = any> {
  index: number
  node: T
  paths: string[]
  nodes: T[]
  parent: MaybeNullish<T>
  tree: T[]
}

const findTreeNode: HelperCreateTreeFuncHandler<FindTreeOptions, FindResult | null, boolean> = (
  tree,
  iter,
  parent,
  paths,
  nodes,
  childrenKey,
  options,
) => {
  let _paths, _nodes, match
  for (let index = 0; index < tree.length; index++) {
    const node = tree[index]
    _paths = paths.concat(`${index}`)
    _nodes = nodes.concat(node)

    // 执行外部迭代器，若存在则返回
    if (iter.call(tree, node, index, parent, _paths, _nodes, tree)) {
      return {
        index,
        node,
        paths: _paths,
        nodes: _nodes,
        parent,
        tree,
      }
    }

    // 存在下一级时递归遍历
    if (node[childrenKey]) {
      match = findTreeNode(
        node[childrenKey],
        iter,
        node,
        _paths.concat(childrenKey),
        _nodes,
        childrenKey,
        options,
      )

      // 递归遍历的结果存在时返回
      if (match) return match
    }
  }

  // 递归结束时返回 null
  return null
}

type FindTreeFunc = <T extends Recordable = Recordable>(
  array: T[],
  iterator: TreeIterator<T, boolean>,
  options?: FindTreeOptions,
) => FindResult<T> | null

/**
 * 根据迭代器查找树列表子节点
 * @param array 树列表
 * @param iterator 迭代器
 * @param options 配置项
 *
 * @example
 * ```ts
 * findTree(
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
 * // => { index: 0, node: { id: 3, text: '3', }, paths: ['0', 'children', '0'], nodes: [{ id: 1, text: '1', children: [{...}], }, { id: 3, text: '3', }], tree: [...] }
 * ```
 */
export const findTree = helperCreateTreeFunc(findTreeNode) as FindTreeFunc

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

  it('查找树节点', () => {
    const result = findTree(tree, (node) => node.id >= 2, { childrenKey: 'subs' })
    expect(result!.node).toStrictEqual(tree[0].subs![0])
  })
}
