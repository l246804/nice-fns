import { isObjectLike } from './isObjectLike'

/**
 * 扁平化对象属性路径
 * @param object 目标对象
 * @param preservePath 保留属性路径回调，返回假值时当前路径将不会保存在结果中
 * @param deepFlatten 深度扁平化回调，返回假值时将停止深度递归目标对象
 *
 * @example
 * ```ts
 * const obj = { a: { b: [{ c: [{ d: 1 }] }] } }
 *
 * flattenPaths(obj)
 * // => ['a', 'a.b', 'a.b[0]', 'a.b[0].c', 'a.b[0].c[0]', 'a.b[0].c[0].d']
 *
 * // 仅保留末端属性路径
 * flattenPaths(obj, (value) => !isObjectLike(value))
 * // => ['a.b[0].c[0].d']
 *
 * // 跳过数组属性
 * flattenPaths(obj, undefined, (value) => isObjectLike(value) && !isArray(value))
 * // => ['a', 'a.b']
 * ```
 */
export function flattenPaths(
  object: any,
  preservePath: (value: any, key: string, path: string) => boolean = () => true,
  deepFlatten: (value: any, key: string, path: string) => boolean = (value) => isObjectLike(value),
) {
  return flatten(object, [])

  function flatten(obj: any, results: string[], parent = ''): string[] {
    if (isObjectLike(obj)) {
      for (const key of Object.keys(obj)) {
        const el = obj[key as keyof typeof obj]
        const path = parent + (/^[^a-z$_]/i.test(key) ? `[${key}]` : `${parent ? '.' : ''}${key}`)

        // 保留属性路径
        if (preservePath(el, key, path)) results.push(path)

        // 深度扁平化
        if (deepFlatten(el, key, path)) flatten(el, results, path)
      }
    }

    return results
  }
}

if (import.meta.vitest) {
  const obj = { a: { b: [{ c: [{ d: 1 }] }] }, e: 2 }

  describe('基础功能', () => {
    it('完整属性路径', () => {
      expect(flattenPaths(obj)).toStrictEqual([
        'a',
        'a.b',
        'a.b[0]',
        'a.b[0].c',
        'a.b[0].c[0]',
        'a.b[0].c[0].d',
        'e',
      ])
    })

    it('末端属性路径', () => {
      expect(flattenPaths(obj, (v) => !_.isObjectLike(v))).toStrictEqual(['a.b[0].c[0].d', 'e'])
    })

    it('跳过数组属性', () => {
      expect(flattenPaths(obj, undefined, (v) => _.isObjectLike(v) && !_.isArray(v))).toStrictEqual(
        ['a', 'a.b', 'e'],
      )
    })
  })
}
