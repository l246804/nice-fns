import type { Primitive } from '@rhao/types-base'
import { isObject } from 'lodash-unified'

export interface ArrayToMapOptions<
  UseMap extends boolean = false,
  PrimaryKey extends string = string,
> {
  /**
   * 对象数组转映射的主键
   */
  primaryKey: PrimaryKey
  /**
   * 使用 `Map` 类型进行映射，设为 `false` 时使用 `Object` 类型映射
   * @default false
   */
  useMap?: UseMap
}

type ArrayToMapResult<K, V, UseMap extends boolean> = UseMap extends true
  ? Map<K, V>
  : Record<PropertyKey, V>

/**
 * 对象数组转映射对象
 * @param array 对象数组
 * @param options 配置项
 *
 * @example
 * ```ts
 * const array = [{ id: 1, text: 'a' }, { id: 2, text: 'b' }]
 *
 * arrayToMap(array, { primaryKey: 'id' })
 * // => Object { '1': { id: 1, text: 'a' }, '2': { id: 2, text: 'b' } }
 *
 * arrayToMap(array, { primaryKey: 'id', useMap: true })
 * // => Map [[1, { id: 1, text: 'a' }], [2, { id: 2, text: 'b' }]]
 * ```
 */
export function arrayToMap<
  T extends {},
  PrimaryKey extends keyof T = keyof T,
  UseMap extends boolean = false,
>(
  array: T[],
  options: ArrayToMapOptions<UseMap, PrimaryKey extends string ? PrimaryKey : never>,
): ArrayToMapResult<T[PrimaryKey], T, UseMap>

/**
 * 原始值数组转映射对象
 * @param array 原始值数组
 * @param options 配置项
 *
 * @example
 * ```ts
 * const array = ['a', 'b', 'c']
 *
 * arrayToMap(array)
 * // => Object { 'a': 'a', 'b': 'b', 'c': 'c' }
 *
 * arrayToMap(array, { useMap: true })
 * // => Map [['a', 'a'], ['b', 'b'], ['c', 'c']]
 * ```
 */
export function arrayToMap<T extends Primitive, UseMap extends boolean = false>(
  array: T[],
  options?: Omit<ArrayToMapOptions<UseMap>, 'primaryKey'>,
): ArrayToMapResult<T, T, UseMap>

/**
 * 数组转映射对象
 * @param array 数组
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 原始值数组转映射
 * const array = ['a', 'b', 'c']
 *
 * arrayToMap(array)
 * // => Object { 'a': 'a', 'b': 'b', 'c': 'c' }
 *
 * arrayToMap(array, { useMap: true })
 * // => Map [['a', 'a'], ['b', 'b'], ['c', 'c']]
 *
 * // 对象数组转映射
 * const array = [{ id: 1, text: 'a' }, { id: 2, text: 'b' }]
 *
 * arrayToMap(array, { primaryKey: 'id' })
 * // => Object { '1': { id: 1, text: 'a' }, '2': { id: 2, text: 'b' } }
 *
 * arrayToMap(array, { primaryKey: 'id', useMap: true })
 * // => Map [[1, { id: 1, text: 'a' }], [2, { id: 2, text: 'b' }]]
 * ```
 */
export function arrayToMap(array: any[], options: any = {}) {
  const { primaryKey, useMap = false } = options as ArrayToMapOptions
  const isPrimitive = array.length > 0 ? !isObject(array[0]) : primaryKey == null

  const entries = array.map(
    (item) => [isPrimitive ? item : item[primaryKey], item] as [unknown, unknown],
  )
  return useMap ? new Map(entries) : Object.fromEntries(entries)
}

if (import.meta.vitest) {
  describe('原始值数组转映射对象', () => {
    const array = ['test', 1, 'abc']

    it('使用 Object', () => {
      expect(arrayToMap(array)).toStrictEqual({ test: 'test', 1: 1, abc: 'abc' })
    })

    it('使用 Map', () => {
      expect(arrayToMap(array, { useMap: true })).toStrictEqual(
        new Map(array.map((item) => [item, item])),
      )
    })
  })

  describe('对象数组转映射对象', () => {
    const array = [
      { id: 1, text: 'a' },
      { id: 2, text: 'b' },
      { id: 3, text: 'c' },
    ]

    it('使用 Object', () => {
      expect(arrayToMap(array, { primaryKey: 'id' })).toStrictEqual({
        1: array[0],
        2: array[1],
        3: array[2],
      })
    })

    it('使用 Map', () => {
      expect(arrayToMap(array, { primaryKey: 'id', useMap: true })).toStrictEqual(
        new Map(array.map((item) => [item.id, item])),
      )
    })
  })
}
