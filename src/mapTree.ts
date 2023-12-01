import type { BasicTreeOptions, TreeIterator } from './tree'
import type { HelperCreateTreeFuncHandler } from './_tree'
import { helperCreateTreeFunc } from './_tree'

export interface MapTreeOptions extends Pick<BasicTreeOptions, 'childrenKey'> {
  /**
   * 映射后的子节点键，设置后则必定存在于节点上
   */
  mapChildrenKey?: string
}

const mapTreeNode: HelperCreateTreeFuncHandler<MapTreeOptions, any[], any> = (
  tree,
  iter,
  parent,
  paths,
  nodes,
  childrenKey,
  options,
) => {
  let _paths, _nodes
  const mapChildrenKey = options.mapChildrenKey || childrenKey
  return tree.map((node, index) => {
    _paths = paths.concat(`${index}`)
    _nodes = nodes.concat(node)

    // 执行外部迭代器获取新节点
    const newNode = iter.call(tree, node, index, parent, _paths, _nodes, tree)

    // 若当前节点存在子级则递归遍历
    if (newNode[childrenKey]) {
      const children = mapTreeNode(
        newNode[childrenKey],
        iter,
        node,
        _paths.concat(childrenKey),
        _nodes,
        childrenKey,
        options,
      )
      // 同步映射子级和原始子级
      newNode[mapChildrenKey] = newNode[childrenKey] = children
    }

    // 返回新节点
    return newNode
  })
}

type MapTreeFunc = <T extends object, U extends object>(
  array: T[],
  iterator: TreeIterator<T, U>,
  options?: MapTreeOptions,
) => U[]

/**
 * 根据迭代器映射子节点生成新的树列表
 * @param array 树列表
 * @param iterator 迭代器
 * @param options 配置项
 *
 * @example
 * ```ts
 * mapTree(
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
 *   (node) => {
 *     if (node.id === 2) {
 *       node.text = '22'
 *     }
 *     return node
 *   },
 * )
 * // => [{...}, { id: 2, text: '22', }]
 * ```
 */
export const mapTree = helperCreateTreeFunc(mapTreeNode) as MapTreeFunc

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

  it('映射树节点', () => {
    const result = mapTree(
      tree,
      (node) => {
        if (node.id === 1)
          delete node.subs
        if (node.id === 2)
          node.text = '222222'
        return node
      },
      { childrenKey: 'subs' },
    )
    expect(result).toStrictEqual([
      {
        id: 1,
        text: '1',
      },
      {
        id: 2,
        text: '222222',
      },
    ])
  })
}
