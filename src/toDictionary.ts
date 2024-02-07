import type { AnyFn, KeyOf, Primitive } from '@rhao/types-base'
import { isArray, isNil, isObject, orderBy, toString } from 'lodash-unified'
import type { _OrderByParams } from './_orderBy'

/**
 * 字典排序参数
 */
export type DictionaryOrderByParams<T extends DictionaryItem<any, any> = DictionaryItem<any, any>> =
  _OrderByParams<T>

/**
 * 字典项
 */
export interface DictionaryItem<Data = unknown, Value = unknown> {
  /**
   * 字典项键
   */
  key: string
  /**
   * 字典项值
   */
  value: Value
  /**
   * 字典项标签
   */
  label: string
  /**
   * 字典项数据，来源于字典原始数据项
   */
  data: Data
}

/**
 * 字典内置方法
 */
export interface DictionaryBuiltinMethods<
  Data = unknown,
  Value = unknown,
  Key extends string = string,
  Item extends DictionaryItem = DictionaryItem<Data, Value>,
> extends Pick<Array<Item>, 'forEach' | 'filter' | 'find' | 'every' | 'some'> {
  /**
   * 获取字典键项对列表
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
  entries(orderParams?: DictionaryOrderByParams<Item>): [string, Item][]

  /**
   * 获取字典项列表
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
  items(orderParams?: DictionaryOrderByParams<Item>): Item[]

  /**
   * 获取字典键列表
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
  keys(orderParams?: DictionaryOrderByParams<Item>): string[]

  /**
   * 获取字典项值列表
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
  values(orderParams?: DictionaryOrderByParams<Item>): Value[]

  /**
   * 获取字典项标签列表
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
  labels(orderParams?: DictionaryOrderByParams<Item>): string[]

  /**
   * 根据指定键获取字典项
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
  get(key: Key): Item | undefined

  /**
   * 根据指定键获取字典项值
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
  getValue(key: Key): Value | undefined

  /**
   * 根据指定键获取字典项键，用于明确字面量意义
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
   * dict.getKey('a')
   * // => 'a'
   *
   * dict.getKey('c')
   * // => ''
   *
   * const list = [
   *   // 字面量 'a' 与 dict 绑定不明显，不易于修改
   *   { name: 'a', label: dict.getLabel('a'), },
   *   // 字面量 'b' 与 dict 强关联，易于修改
   *   { name: dict.getKey('b'), label: dict.getLabel('b'), },
   * ]
   * ```
   */
  getKey(key: Key): string

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
  getLabel(key: Key): string

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
  getData(key: Key): Item['data'] | undefined

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
  getByValue(value: unknown): Item | undefined

  /**
   * 根据指定字典项值获取字典项键
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
   * dict.getKeyByValue(1)
   * // => 'a'
   *
   * dict.getKeyByValue(3)
   * // => ''
   * ```
   */
  getKeyByValue(value: unknown): string

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
  getLabelByValue(value: unknown): string

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
  getDataByValue(value: unknown): Item['data'] | undefined

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
  has(key: Key): boolean
}

/**
 * 基础字典
 */
export interface DictionaryBase<Raw = unknown, Data = unknown, Value = unknown> {
  /**
   * 字典原始数据
   */
  readonly raw: Raw

  /**
   * 字典内置原始数据映射对象
   */
  readonly map: Map<string, DictionaryItem<Data, Value>>

  /**
   * 字典项数量
   */
  readonly size: number
}

/**
 * 字典
 */
export type Dictionary<
  Raw = unknown,
  Data = unknown,
  Value = unknown,
  Key extends string = string,
  Methods extends Record<PropertyKey, AnyFn> = {},
> = DictionaryBase<Raw, Data, Value> & DictionaryBuiltinMethods<Data, Value, Key> & Methods

/**
 * 字典配置项
 */
export interface DictionaryOptions<
  ValueKey extends string,
  LabelKey extends string = ValueKey,
  Key extends string = ValueKey,
  Methods extends Record<PropertyKey, AnyFn> = {},
  Instance = Dictionary,
> {
  /**
   * 字典项的值键，值必须唯一
   * @default 'value'
   */
  valueKey?: ValueKey
  /**
   * 字典键，值必须唯一
   * @default options.valueKey
   */
  key?: Key
  /**
   * 字典项的标签键
   * @default options.valueKey
   */
  labelKey?: LabelKey
  /**
   * 字典自定义方法
   */
  methods?: Methods & ThisType<Instance>
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
  getKey(key) {
    return this.get(key)?.key || ''
  },
  getLabel(key) {
    return this.get(key)?.label || ''
  },
  getData(key) {
    return this.get(key)?.data
  },
  getByValue(value) {
    return this.find((item) => item.value === value)
  },
  getKeyByValue(value) {
    return this.getByValue(value)?.key || ''
  },
  getLabelByValue(value) {
    return this.getByValue(value)?.label || ''
  },
  getDataByValue(value) {
    return this.getByValue(value)?.data
  },
  has(key) {
    return this.keys().includes(key)
  },
  forEach: createArrayMethods('forEach'),
  filter: createArrayMethods('filter'),
  find: createArrayMethods('find'),
  every: createArrayMethods('every'),
  some: createArrayMethods('some'),
} as DictionaryBuiltinMethods & ThisType<Dictionary>

function createArrayMethods(method: keyof Array<DictionaryItem>) {
  return function func(this: Dictionary, ...args: any[]) {
    return Array.prototype[method].apply(this.items(), args)
  }
}

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
  Data,
  ValueKey extends string = 'value',
  LabelKey extends string = ValueKey,
  Key extends string = ValueKey,
  Value = Data extends Primitive
    ? Data
    : Data extends Record<ValueKey, infer Value>
      ? Value
      : unknown,
  DataKey extends string = Data extends Primitive
    ? Data[] extends Array<infer _T>
      ? _T extends string
        ? _T
        : string
      : string
    : string,
  Methods extends Record<PropertyKey, AnyFn> = {},
>(
  array: Data[],
  options?: DictionaryOptions<
    ValueKey,
    LabelKey,
    Key,
    Methods,
    Dictionary<Data[], Data, Value, DataKey, Methods>
  >,
): Dictionary<Data[], Data, Value, DataKey, Methods>

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
  Raw extends {},
  Data = Raw extends Record<PropertyKey, infer Value> ? Value : unknown,
  ValueKey extends string = 'value',
  LabelKey extends string = ValueKey,
  Key extends string = ValueKey,
  Value = Data extends Primitive
    ? Data
    : Data extends Record<ValueKey, infer Value>
      ? Value
      : unknown,
  DataKey extends KeyOf<Raw, string> = KeyOf<Raw, string>,
  Methods extends Record<PropertyKey, AnyFn> = {},
>(
  object: Raw,
  options?: Omit<
    DictionaryOptions<
      ValueKey,
      LabelKey,
      Key,
      Methods,
      Dictionary<Raw, Data, Value, DataKey, Methods>
    >,
    'key'
  >,
): Dictionary<Raw, Data, Value, DataKey, Methods>

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
export function toDictionary(data: any, options: DictionaryOptions<'value'> = {}) {
  const { valueKey = 'value', labelKey = valueKey, key = valueKey } = options

  // 字典方法
  const methods = Object.assign({}, toDictionary.builtinMethods, options.methods)
  // 字典实例
  const instance = Object.create(methods)
  // 字典实例内置 Map 实例
  const map = new Map()

  // 设置内置属性
  Object.defineProperties(instance, {
    raw: {
      enumerable: true,
      get: () => data,
    },
    map: {
      enumerable: true,
      get: () => map,
    },
    size: {
      enumerable: true,
      get: () => map.size,
    },
  })

  if (isArray(data)) {
    data.forEach((item) => {
      if (isNil(item)) return

      const _item = toItem(item)
      map.set(_item.key, _item)
    })
  }
  else if (isObject(data)) {
    Object.entries(data).forEach(([key, item]) => {
      map.set(key, Object.assign(toItem(item), { key }))
    })
  }

  Object.entries(methods).forEach(([name, value]) => {
    methods[name as keyof typeof methods] = value.bind(instance)
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

  return instance
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
      expect(dict.getKey('a')).toBe('a')
      expect(dict.getLabel('a')).toBe('a')
      expect(dict.getData('a')).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.getByValue(0)).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getKeyByValue(0)).toBe('a')
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
      expect(dict.size).toBe(2)
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
      expect(dict.getKey('a')).toBe('a')
      expect(dict.getValue('a')).toBe(0)
      expect(dict.getLabel('a')).toBe('a')
      expect(dict.getData('a')).toStrictEqual({ label: 'a', value: 0, tag: 'primary' })

      expect(dict.getByValue(0)).toStrictEqual({
        key: 'a',
        value: 0,
        label: 'a',
        data: { label: 'a', value: 0, tag: 'primary' },
      })
      expect(dict.getKeyByValue(0)).toBe('a')
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
      expect(dict.size).toBe(2)
      expect(dict.getTag('a')).toBe('primary')
    })
  })
}
