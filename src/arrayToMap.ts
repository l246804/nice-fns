import type { KeyOf, Primitive, Recordable } from '@rhao/types-base'
import { isObject, isString } from 'lodash-unified'

export interface ArrayToMapOptions<
  T = any,
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
  /**
   * 根据条件过滤映射条目
   * @param key 待映射键，来源于数组项主键值
   * @param value 待映射值，来源于数组项
   * @param array 源数组
   *
   * @example
   * ```ts
   * // 原始值数组转映射
   * const array = [1, 2, null, undefined, 3]
   * arrayToMap(array, { filter: (key) => key != null })
   * // { '1': '1', '2': '2', '3': '3' }
   *
   * // 对象数组转映射
   * const array = [{ id: 1, text: 'a' }, { id: null, text: 'b' }]
   * arrayToMap(array, { primaryKey: 'id', filter: (key) => key != null })
   * // { '1': { id: 1, text: 'a' } }
   * ```
   */
  filter?(
    key: T extends PrimaryKey ? T : PrimaryKey extends keyof T ? T[PrimaryKey] : any,
    value: T,
    array: T[],
  ): unknown
}

type ArrayToMapResult<T, K, UseMap extends boolean> = UseMap extends true
  ? Map<K, T>
  : Recordable<T>

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
  T extends Recordable,
  PrimaryKey extends KeyOf<T> = KeyOf<T>,
  UseMap extends boolean = false,
>(
  array: T[],
  options: ArrayToMapOptions<T, UseMap, PrimaryKey>,
): ArrayToMapResult<T, PrimaryKey, UseMap>

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
  options?: Omit<ArrayToMapOptions<T, UseMap>, 'primaryKey'>,
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
  const { primaryKey, useMap = false, filter } = options as ArrayToMapOptions
  const isPrimitive = array.length > 0 ? !isObject(array[0]) : !isString(primaryKey)

  let entries = array.map((item) => [isPrimitive ? item : item[primaryKey], item] as [any, any])
  if (filter) entries = entries.filter((item) => filter(...item, array))

  return useMap ? new Map(entries) : Object.fromEntries(entries)
}

if (import.meta.vitest) {
  describe('原始值数组转映射对象', () => {
    const array = ['test', 1, 'abc']

    it('使用 Object', () => {
      expect(arrayToMap(array)).toStrictEqual({ test: 'test', 1: 1, abc: 'abc' })
      expect(arrayToMap(array, { filter: (key) => key !== 1 })).toStrictEqual({
        test: 'test',
        abc: 'abc',
      })
    })

    it('使用 Map', () => {
      expect(arrayToMap(array, { useMap: true, filter: (key) => key !== 1 })).toStrictEqual(
        new Map(array.filter((v) => v !== 1).map((item) => [item, item])),
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
      expect(arrayToMap(array, { primaryKey: 'id', filter: (key) => key < 3 })).toStrictEqual({
        1: array[0],
        2: array[1],
      })
    })

    it('使用 Map', () => {
      expect(
        arrayToMap(array, { primaryKey: 'id', useMap: true, filter: (key) => key < 3 }),
      ).toStrictEqual(new Map(array.filter((v) => v.id < 3).map((item) => [item.id, item])))
    })
  })
}
