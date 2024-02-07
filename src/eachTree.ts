import type { HelperCreateTreeFuncHandler } from './_tree'
import { helperCreateTreeFunc } from './_tree'

export interface EachTreeOptions {
  /**
   * 子节点键
   * @default 'children'
   */
  childrenKey?: string
}

const eachTreeNode: HelperCreateTreeFuncHandler<EachTreeOptions> = (
  tree,
  iter,
  parent,
  paths,
  nodes,
  childrenKey,
  options,
) => {
  let _paths, _nodes

  tree.forEach((node, index) => {
    // 记录当前链路
    _paths = paths.concat(`${index}`)
    _nodes = nodes.concat(node)

    // 执行外部迭代器
    iter.call(tree, node, index, parent, _paths, _nodes, tree)

    // 递归遍历子级
    if (node[childrenKey]) {
      eachTreeNode(
        node[childrenKey],
        iter,
        node,
        _paths.concat(childrenKey),
        _nodes,
        childrenKey,
        options,
      )
    }
  })
}

/**
 * 根据迭代器遍历树列表
 * @param array 树列表
 * @param iterator 迭代器
 * @param options 配置项
 *
 * @example
 * ```ts
 * eachTree(
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
 *   (node) => console.log(node.text),
 * )
 * ```
 */
export const eachTree = helperCreateTreeFunc(eachTreeNode)

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

  it('遍历树节点', () => {
    const result: number[] = []
    eachTree(
      tree,
      (node) => {
        result.push(node.id)
      },
      { childrenKey: 'subs' },
    )

    expect(result).toStrictEqual([1, 3, 2])
  })
}
