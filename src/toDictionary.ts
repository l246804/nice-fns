import type { IfUnknown, KeyOf, MaybeArray, Primitive, Recordable } from '@rhao/types-base'
import { assign, isArray, isNil, isObject, orderBy, toString } from 'lodash-unified'

/**
 * 字典排序参数
 */
export type DictionaryOrderByParams = [
  iterates?: MaybeArray<string>,
  orders?: MaybeArray<'asc' | 'desc'>,
]

/**
 * 字典项
 */
export interface DictionaryItem<T = any, V = any> {
  /**
   * 字典项键
   */
  key: string
  /**
   * 字典项值
   */
  value: V
  /**
   * 字典项标签
   */
  label: string
  /**
   * 字典项数据，来源于字典原始数据项
   */
  data: T
}

/**
 * 字典原始数据
 */
export type DictionaryRawData = Recordable | Array<any>

/**
 * 提取字典原始数据项
 */
export type ExtractDictionaryRawDataItem<T extends DictionaryRawData> = T extends Array<infer TA>
  ? TA
  : T extends Recordable<infer TO>
    ? TO
    : any

/**
 * 字典内置方法
 */
export interface DictionaryBuiltinMethods<
  T extends DictionaryRawData = Recordable,
  V = any,
  K extends string = string,
  I extends DictionaryItem = DictionaryItem<ExtractDictionaryRawDataItem<T>, V>,
> extends Pick<Array<I>, 'forEach' | 'filter' | 'find' | 'every' | 'some'> {
  /**
   * 获取字典项数量
   */
  size(this: Dictionary<T, V, K>): number
  /**
   * 获取字典键项对列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.entries()
   * [
   *   ['a', { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } }],
   *   ['b', { key: 'b', value: 2, label: 'B', data: { id: 2, text: 'B' } }],
   * ]
   *
   * // 根据 value 降序排列
   * dict.entries([['value'], ['desc']])
   * [
   *   ['b', { key: 'b', value: 2, label: 'B', data: { id: 2, text: 'B' } }],
   *   ['a', { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } }],
   * ]
   * ```
   */
  entries(this: Dictionary<T, V, K>, orderParams?: DictionaryOrderByParams): [string, I][]
  /**
   * 获取字典项列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.items()
   * [
   *   { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } },
   *   { key: 'b', value: 2, label: 'B', data: { id: 2, text: 'B' } },
   * ]
   *
   * // 根据 value 降序排列
   * dict.items([['value'], ['desc']])
   * [
   *   { key: 'b', value: 2, label: 'B', data: { id: 2, text: 'B' } },
   *   { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } },
   * ]
   * ```
   */
  items(this: Dictionary<T, V, K>, orderParams?: DictionaryOrderByParams): I[]
  /**
   * 获取字典键列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.keys()
   * ['a', 'b']
   *
   * // 根据 value 降序排列
   * dict.keys([['value'], ['desc']])
   * ['b', 'a']
   * ```
   */
  keys(this: Dictionary<T, V, K>, orderParams?: DictionaryOrderByParams): string[]
  /**
   * 获取字典项值列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.values()
   * [1, 2]
   *
   * // 根据 value 降序排列
   * dict.values([['value'], ['desc']])
   * [2, 1]
   * ```
   */
  values(this: Dictionary<T, V, K>, orderParams?: DictionaryOrderByParams): V[]
  /**
   * 获取字典项标签列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.labels()
   * ['A', 'B']
   *
   * // 根据 value 降序排列
   * dict.labels([['value'], ['desc']])
   * ['B', 'A']
   * ```
   */
  labels(this: Dictionary<T, V, K>, orderParams?: DictionaryOrderByParams): string[]
  /**
   * 根据指定键获取字典项
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.get('a')
   * // => { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } }
   *
   * dict.get('c')
   * // => undefined
   * ```
   */
  get(this: Dictionary<T, V, K>, key: K): I | undefined
  /**
   * 根据指定键获取字典项值
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getValue('a')
   * // => 1
   *
   * dict.getValue('c')
   * // => undefined
   * ```
   */
  getValue(this: Dictionary<T, V, K>, key: K): V | undefined
  /**
   * 根据指定键获取字典项标签
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getLabel('a')
   * // => 'A'
   *
   * dict.getLabel('c')
   * // => ''
   * ```
   */
  getLabel(this: Dictionary<T, V, K>, key: K): string
  /**
   * 根据指定键获取字典项数据
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getData('a')
   * // => { id: 1, text: 'A' }
   *
   * dict.getData('c')
   * // => undefined
   * ```
   */
  getData(this: Dictionary<T, V, K>, key: K): T | undefined
  /**
   * 根据指定字典项值获取字典项
   * @param this 字典对象
   * @param value 字典项值
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getByValue(1)
   * // => { key: 'a', value: 1, label: 'A', data: { id: 1, text: 'A' } }
   *
   * dict.getByValue(3)
   * // => undefined
   * ```
   */
  getByValue(this: Dictionary<T, V, K>, value: any): I | undefined
  /**
   * 根据指定字典项值获取字典项标签
   * @param this 字典对象
   * @param value 字典项值
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getLabelByValue(1)
   * // => 'A'
   *
   * dict.getLabelByValue(3)
   * // => ''
   * ```
   */
  getLabelByValue(this: Dictionary<T, V, K>, value: any): string
  /**
   * 根据指定字典项值获取字典项数据
   * @param this 字典对象
   * @param value 字典项值
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.getDataByValue(1)
   * // => { id: 1, text: 'A' }
   *
   * dict.getDataByValue(3)
   * // => undefined
   * ```
   */
  getDataByValue(this: Dictionary<T, V, K>, value: any): T | undefined
  /**
   * 根据指定键判断是否存在字典项
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = toDictionary(
   *   { a: { id: 1, text: 'A' }, b: { id: 2, text: 'B' } },
   *   { valueKey: 'id', labelKey: 'text' },
   * )
   *
   * dict.has('a')
   * // => true
   *
   * dict.has('c')
   * // => false
   * ```
   */
  has(this: Dictionary<T, V, K>, key: K): boolean
}

/**
 * 字典方法
 */
export type DictionaryMethod<
  T extends DictionaryRawData = Recordable,
  V = any,
  K extends string = string,
> = (this: Dictionary<T, V, K>, ...args: any[]) => any

/**
 * 字典自定义方法
 */
export type DictionaryMethods<
  T extends DictionaryRawData = Recordable,
  V = any,
  K extends string = string,
> = Recordable<DictionaryMethod<T, V, K>>

/**
 * 字典
 */
export interface Dictionary<
  T extends DictionaryRawData = Recordable,
  V = any,
  K extends string = string,
> extends DictionaryBuiltinMethods<T, V, K> {
  /**
   * 字典原始数据
   */
  readonly raw: T
  /**
   * 字典内置原始数据映射对象
   */
  readonly map: Map<string, DictionaryItem<ExtractDictionaryRawDataItem<T>, V>>
}

/**
 * 字典配置项
 */
export interface DictionaryOptions<
  VK extends string = string,
  LK extends string = string,
  K extends string = string,
  T extends DictionaryRawData = Recordable,
  V = any,
  DK extends string = string,
  M extends DictionaryMethods<T, V, DK> = DictionaryMethods<T, V, DK>,
> {
  /**
   * 字典键，值必须唯一
   * @default options.valueKey
   */
  key?: K
  /**
   * 字典项的值键，值必须唯一
   * @default 'value'
   */
  valueKey?: VK
  /**
   * 字典项的标签键
   * @default options.valueKey
   */
  labelKey?: LK
  /**
   * 字典自定义方法
   */
  methods?: M
}

/**
 * 内置方法
 */
const builtinMethods = {
  entries(orderParams) {
    return this.items(orderParams).map((item) => [item.key, item])
  },
  keys(orderParams) {
    return this.items(orderParams).map((item) => item.key)
  },
  items(orderParams) {
    const items = [...this.map.values()]
    return orderParams ? orderBy(items, ...orderParams) : items
  },
  values(orderParams) {
    return this.items(orderParams).map((item) => item.value)
  },
  labels(orderParams) {
    return this.items(orderParams).map((item) => item.label)
  },
  get(key) {
    return this.map.get(key)
  },
  getValue(key) {
    return this.get(key)?.value
  },
  getLabel(key) {
    return this.get(key)?.label || ''
  },
  getByValue(value) {
    return this.find((item) => item.value === value)
  },
  getLabelByValue(value) {
    return this.getByValue(value)?.label || ''
  },
  has(key) {
    return this.keys().includes(key as string)
  },
  getData(key) {
    return this.get(key)?.data
  },
  getDataByValue(value) {
    return this.getByValue(value)?.data
  },
  size() {
    return this.map.size
  },
} as DictionaryBuiltinMethods

const arrayPrototypeMethods = ['forEach', 'filter', 'find', 'every', 'some'] as const
arrayPrototypeMethods.forEach((method) => {
  ;(builtinMethods as any)[method] = function arrayFunc(...args: any[]) {
    return this.items()[method](...args)
  }
})

/**
 * 内置方法
 */
toDictionary.builtinMethods = builtinMethods

/**
 * 数组转字典
 * @param array 数组
 * @param options 配置项
 * @returns 字典
 *
 * @example
 * ```ts
 * const array = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
 * // 设置 name 为字典键
 * const dict = toDictionary(array, { valueKey: 'id', labelKey: 'name', key: 'name' })
 *
 * dict.raw === array
 * // => true
 *
 * dict.get('a')
 * // => { key: 'a', label: 'a', value: 1, data: { id: 1, name: 'a' } }
 * ```
 */
export function toDictionary<
  T,
  VK extends KeyOf<T> = KeyOf<T>,
  LK extends KeyOf<T> = KeyOf<T>,
  K extends KeyOf<T> = KeyOf<T>,
  V = T extends Primitive ? T : T extends Recordable<infer _V, VK> ? IfUnknown<_V, any> : any,
  DK extends string = T extends Primitive
    ? T[] extends Array<infer _T>
      ? _T extends string
        ? _T
        : string
      : string
    : string,
  M extends DictionaryMethods<T[], V, DK> = DictionaryMethods<T[], V, DK>,
>(array: T[], options?: DictionaryOptions<VK, LK, K, T[], V, DK, M>): Dictionary<T[], V, DK> & M

/**
 * 对象转字典
 * @param object 对象
 * @param options 配置项
 * @returns 字典
 *
 * @example
 * ```ts
 * const object = { a: { value: 1, text: 'A' }, b: { value: 2, text: 'B' } }
 * // 对象转字典时以对象键作为字典键
 * const dict = toDictionary(object, { valueKey: 'value', labelKey: 'text' })
 *
 * dict.raw === object
 * // => true
 *
 * dict.get('a')
 * // => { key: 'a', label: 'A', value: 1, data: { value: 1, text: 'A' } }
 * ```
 */
export function toDictionary<
  T extends Recordable,
  VT = T extends Recordable<infer _T> ? _T : any,
  VK extends KeyOf<VT> = KeyOf<VT>,
  LK extends KeyOf<VT> = KeyOf<VT>,
  K extends KeyOf<VT> = KeyOf<VT>,
  V = VT extends Primitive ? VT : VT extends Recordable<infer _V, VK> ? IfUnknown<_V, any> : any,
  DK extends KeyOf<T> = KeyOf<T>,
  M extends DictionaryMethods<T, V, DK> = DictionaryMethods<T, V, DK>,
>(
  object: T,
  options?: Omit<DictionaryOptions<VK, LK, K, T, V, DK, M>, 'key'>,
): Dictionary<T, V, DK> & M

/**
 * 支持对象和数组转为字典
 * @param data 对象或数组
 * @param options 配置项
 * @returns 字典
 *
 * @example
 * ```ts
 * // 对象转字典
 * const object = { a: { value: 1, text: 'A' }, b: { value: 2, text: 'B' } }
 * // 对象转字典时以对象键作为字典键
 * const dict = toDictionary(object, { valueKey: 'value', labelKey: 'text' })
 *
 * dict.raw === object
 * // => true
 *
 * dict.get('a')
 * // => { key: 'a', label: 'A', value: 1, data: { value: 1, text: 'A' } }
 *
 * // 数组转字典
 * const array = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
 * // 设置 name 为字典键
 * const dict = toDictionary(array, { valueKey: 'id', labelKey: 'name', key: 'name' })
 *
 * dict.raw === array
 * // => true
 *
 * dict.get('a')
 * // => { key: 'a', label: 'a', value: 1, data: { id: 1, name: 'a' } }
 * ```
 */
export function toDictionary(data: any, options: DictionaryOptions = {}) {
  const { valueKey = 'value', labelKey = valueKey, key = valueKey } = options

  const methods = assign({}, toDictionary.builtinMethods, options.methods)
  const dictionary = assign(Object.create(methods), { raw: data, map: new Map() })
  const map = dictionary.map

  if (isArray(data)) {
    data.forEach((item) => {
      if (isNil(item)) return

      const _item = toItem(item)
      map.set(_item.key, _item)
    })
  }
  else if (isObject(data)) {
    Object.entries(data).forEach(([key, item]) => {
      map.set(key, assign(toItem(item), { key }))
    })
  }

  Object.entries(methods).forEach(([name, value]) => {
    methods[name as keyof typeof methods] = value.bind(dictionary)
  })

  function toItem(item: any): DictionaryItem {
    const isPrimitive = !isObject(item) as boolean
    return {
      key: toString(isPrimitive ? item : item[key]),
      value: isPrimitive ? item : item[valueKey],
      label: isPrimitive ? toString(item) : item[labelKey],
      data: item,
    }
  }

  return dictionary as Dictionary
}

if (import.meta.vitest) {
  describe('对象转字典', () => {
    const dict = toDictionary(
      {
        a: {
          value: 0,
          label: 'a',
          tag: 'primary',
        },
        b: {
          value: 1,
          label: 'b',
          tag: 'danger',
        },
      },
      {
        labelKey: 'label',
        valueKey: 'value',
        methods: {
          getTag(key: string) {
            return this.get(key)?.data.tag
          },
        },
      },
    )

    it('函数测试', () => {
      expect(dict.entries()).toStrictEqual([
        ['a', { key: 'a', value: 0, label: 'a', data: { value: 0, label: 'a', tag: 'primary' } }],
        ['b', { key: 'b', value: 1, label: 'b', data: { value: 1, label: 'b', tag: 'danger' } }],
      ])
      expect(dict.items()).toStrictEqual([
        { key: 'a', value: 0, label: 'a', data: { value: 0, label: 'a', tag: 'primary' } },
        { key: 'b', value: 1, label: 'b', data: { value: 1, label: 'b', tag: 'danger' } },
      ])
      expect(dict.keys()).toStrictEqual(['a', 'b'])
      expect(dict.values()).toStrictEqual([0, 1])
      expect(dict.labels()).toStrictEqual(['a', 'b'])

      expect(dict.keys(['value', 'desc'])).toStrictEqual(['b', 'a'])
      expect(dict.values(['value', 'desc'])).toStrictEqual([1, 0])
      expect(dict.labels(['value', 'desc'])).toStrictEqual(['b', 'a'])

      expect(dict.get('a')).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getValue('a')).toBe(0)
      expect(dict.getLabel('a')).toBe('a')
      expect(dict.getData('a')).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.getByValue(0)).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getLabelByValue(0)).toBe('a')
      expect(dict.getDataByValue(0)).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.find((item) => item.value === 1)).toStrictEqual({
        key: 'b',
        value: 1,
        label: 'b',
        data: { label: 'b', value: 1, tag: 'danger' },
      })
      expect(dict.filter((item) => item.value === 0)).toStrictEqual([
        {
          key: 'a',
          value: 0,
          label: 'a',
          data: { label: 'a', value: 0, tag: 'primary' },
        },
      ])

      expect(dict.has('a')).toBe(true)
      expect(dict.size()).toBe(2)
      expect(dict.getTag('a')).toBe('primary')
    })
  })

  describe('数组转字典', () => {
    const dict = toDictionary(
      [
        {
          value: 0,
          label: 'a',
          tag: 'primary',
        },
        {
          value: 1,
          label: 'b',
          tag: 'danger',
        },
      ],
      {
        key: 'label',
        labelKey: 'label',
        valueKey: 'value',
        methods: {
          getTag(key: string) {
            return this.get(key)?.data.tag
          },
        },
      },
    )

    it('函数测试', () => {
      expect(dict.entries()).toStrictEqual([
        ['a', { key: 'a', value: 0, label: 'a', data: { value: 0, label: 'a', tag: 'primary' } }],
        ['b', { key: 'b', value: 1, label: 'b', data: { value: 1, label: 'b', tag: 'danger' } }],
      ])
      expect(dict.items()).toStrictEqual([
        { key: 'a', value: 0, label: 'a', data: { value: 0, label: 'a', tag: 'primary' } },
        { key: 'b', value: 1, label: 'b', data: { value: 1, label: 'b', tag: 'danger' } },
      ])
      expect(dict.keys()).toStrictEqual(['a', 'b'])
      expect(dict.values()).toStrictEqual([0, 1])
      expect(dict.labels()).toStrictEqual(['a', 'b'])

      expect(dict.keys(['value', 'desc'])).toStrictEqual(['b', 'a'])
      expect(dict.values(['value', 'desc'])).toStrictEqual([1, 0])
      expect(dict.labels(['value', 'desc'])).toStrictEqual(['b', 'a'])

      expect(dict.get('a')).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getValue('a')).toBe(0)
      expect(dict.getLabel('a')).toBe('a')
      expect(dict.getData('a')).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.getByValue(0)).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getLabelByValue(0)).toBe('a')
      expect(dict.getDataByValue(0)).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.find((item) => item.value === 1)).toStrictEqual({
        key: 'b',
        value: 1,
        label: 'b',
        data: { label: 'b', value: 1, tag: 'danger' },
      })
      expect(dict.filter((item) => item.value === 0)).toStrictEqual([
        {
          key: 'a',
          value: 0,
          label: 'a',
          data: { label: 'a', value: 0, tag: 'primary' },
        },
      ])

      expect(dict.has('a')).toBe(true)
      expect(dict.size()).toBe(2)
      expect(dict.getTag('a')).toBe('primary')
    })
  })
}
