import type { Fn, Simplify } from '@rhao/types-base'
import type { TreeIterator } from './tree'
import type { HelperCreateTreeFuncHandler } from './_tree'
import { helperCreateTreeFunc } from './_tree'

export interface SearchTreeOptions<
  ChildrenKey extends string = string,
  MappingChildrenKey extends string = never,
> {
  /**
   * 是否返回源对象引用，易改变源对象数据结构
   * @default false
   */
  original?: boolean
  /**
   * 源数据引用键，`original` 为 `false` 时生效，未设置时则不引用源数据
   */
  originalDataKey?: string
  /**
   * 子节点键
   * @default 'children'
   */
  childrenKey?: ChildrenKey
  /**
   * 映射后的子节点键，设置后则必定存在于节点上
   */
  mapChildrenKey?: MappingChildrenKey
}

const _searchTreeNode: Fn<
  [
    parentPass: boolean,
    ...args: Parameters<HelperCreateTreeFuncHandler<SearchTreeOptions, any[], boolean>>,
  ],
  any[]
> = (parentPass, tree, iter, parent, paths, nodes, childrenKey, options) => {
  let _paths, _nodes, result, isPass

  const results: any[] = []
  const mapChildrenKey = options.mapChildrenKey || childrenKey

  tree.forEach((node, index) => {
    _paths = paths.concat(`${index}`)
    _nodes = nodes.concat(node)

    // 父级通过时则子级一律通过，否则执行外部迭代器获取结果
    isPass = parentPass || iter.call(tree, node, index, parent, _paths, _nodes, tree)

    // 通过时或有子级时则递归遍历
    if (isPass || node[childrenKey]) {
      // 处理源对象引用
      if (options.original) {
        result = node
      }
      else {
        result = Object.assign({}, node)
        if (options.originalDataKey) result[options.originalDataKey] = node
      }

      // 存在子级时同步映射子级和原始子级
      if (node[childrenKey]) {
        result[mapChildrenKey] = result[childrenKey] = _searchTreeNode(
          isPass,
          node[childrenKey],
          iter,
          node,
          _paths.concat(childrenKey),
          _nodes,
          childrenKey,
          options,
        )
      }

      // 如果通过或子级存在通过则添加结果
      if (isPass || result[mapChildrenKey]?.length) results.push(result)
    }
  })

  return results
}

const searchTreeNode: HelperCreateTreeFuncHandler<SearchTreeOptions, any[], boolean> = (
  ...args
) => {
  return _searchTreeNode(false, ...args)
}

type WithChildren<T, ChildrenKey extends string, MappingChildrenKey extends string> = Simplify<
  T & Record<ChildrenKey | MappingChildrenKey, WithChildren<T, ChildrenKey, MappingChildrenKey>[]>
>

type SearchTreeFunc = <
  T extends {},
  ChildrenKey extends string = 'children',
  MappingChildrenKey extends string = never,
>(
  array: T[],
  iterator: TreeIterator<T, boolean>,
  options?: SearchTreeOptions<ChildrenKey, MappingChildrenKey>,
) => WithChildren<
  Simplify<Omit<T, ChildrenKey | MappingChildrenKey>>,
  ChildrenKey,
  MappingChildrenKey
>[]

/**
 * 根据迭代器搜索树列表的子项数据，区别于 `filterTree` 会返回完整的树形结构列表
 *
 * ***注意：当父级符合搜索规则时将保留所有子级数据！***
 *
 * @param array 树列表
 * @param iterator 迭代器
 * @param options 配置项
 *
 * @example
 * ```ts
 * searchTree(
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
 *   (node) => node.id === 3,
 * )
 * // => [{ id: 1, text: '1', children: [{ id: 3, text: '3', }] }]
 * ```
 */
export const searchTree = helperCreateTreeFunc(searchTreeNode) as SearchTreeFunc

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

  it('搜索树节点', () => {
    const result = searchTree(tree, (node) => node.id >= 2, { childrenKey: 'subs' })
    expect(result).toStrictEqual(tree)
  })
}
