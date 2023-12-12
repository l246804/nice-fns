import type { MaybeArray, Recordable } from '@rhao/types-base'
import { assign, orderBy } from 'lodash-unified'

/**
 * 字典项
 */
export interface DictionaryItem<V = any> {
  /**
   * 字典项值
   */
  value: V
  /**
   * 字典项标签
   */
  label?: string
}

/**
 * 统一化字典项
 */
export type DictionaryItemNormalized<T extends DictionaryItem = DictionaryItem> = Omit<
  T,
  'label'
> & {
  /**
   * 字典键
   */
  key: string
  /**
   * 字典项标签
   */
  label: string
}

/**
 * 字典元对象
 */
export type DictionaryMeta<T extends DictionaryItem = DictionaryItem> = Recordable<T>

type DictionaryBase<T extends DictionaryMeta> = {
  [K in keyof T]: DictionaryItemNormalized<T[K]>
}

type OrderByParams = [iterates?: MaybeArray<string>, orders?: MaybeArray<'asc' | 'desc'>]

export type DictionaryMethod<T extends DictionaryMeta = DictionaryMeta> = (
  this: Dictionary<T>,
  ...args: any[]
) => any
export type DictionaryMethods<T extends DictionaryMeta = DictionaryMeta> = Recordable<
  DictionaryMethod<T>
>

/**
 * 字典内置方法
 */
export interface DictionaryBuiltinMethods<
  T extends DictionaryMeta = DictionaryMeta,
  I extends DictionaryItemNormalized = DictionaryItemNormalized<T[keyof T]>,
  K = keyof T | {},
  V = I['value'],
> extends Pick<Array<I>, 'forEach' | 'filter' | 'find'> {
  /**
   * 获取字典项数量
   */
  size(this: Dictionary<T>): number
  /**
   * 获取字典键项对列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.entries()
   * // => [['a', { value: 1, label: 'a' }], ['b', { value: 2, label: 'b' }]]
   *
   * // 根据 value 降序排列
   * dict.entries([['value'], ['desc']])
   * // => [['b', { value: 2, label: 'b' }], ['a', { value: 1, label: 'a' }]]
   * ```
   */
  entries(this: Dictionary<T>, orderParams?: OrderByParams): [string, I][]
  /**
   * 获取字典项列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.items()
   * // => [{ value: 1, label: 'a' }, { value: 2, label: 'b' }]
   *
   * // 根据 value 降序排列
   * dict.items([['value'], ['desc']])
   * // => [{ value: 2, label: 'b' }, { value: 1, label: 'a' }]
   * ```
   */
  items(this: Dictionary<T>, orderParams?: OrderByParams): I[]
  /**
   * 获取字典键列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.keys()
   * // => ['a', 'b']
   *
   * // 根据 value 降序排列
   * dict.keys([['value'], ['desc']])
   * // => ['b', 'a']
   * ```
   */
  keys(this: Dictionary<T>, orderParams?: OrderByParams): string[]
  /**
   * 获取字典项值列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.values()
   * // => [1, 2]
   *
   * // 根据 value 降序排列
   * dict.values([['value'], ['desc']])
   * // => [2, 1]
   * ```
   */
  values(this: Dictionary<T>, orderParams?: OrderByParams): V[]
  /**
   * 获取字典项标签列表
   * @param this 字典对象
   * @param orderBy 排序参数，依赖于 `lodash.orderBy`
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.labels()
   * // => ['a', 'b']
   *
   * // 根据 value 降序排列
   * dict.labels([['value'], ['desc']])
   * // => ['b', 'a']
   * ```
   */
  labels(this: Dictionary<T>, orderParams?: OrderByParams): string[]
  /**
   * 根据指定键获取字典项
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.get('a')
   * // => { value: 1, label: 'a' }
   *
   * dict.get('c')
   * // => undefined
   * ```
   */
  get(this: Dictionary<T>, key: K): I | undefined
  /**
   * 根据指定键获取字典项值
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.getValue('a')
   * // => 1
   *
   * dict.getValue('c')
   * // => undefined
   * ```
   */
  getValue(this: Dictionary<T>, key: K): V | undefined
  /**
   * 根据指定键获取字典项标签
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.getLabel('a')
   * // => 'a'
   *
   * dict.getLabel('c')
   * // => ''
   * ```
   */
  getLabel(this: Dictionary<T>, key: K): string
  /**
   * 根据指定字典项值获取字典项
   * @param this 字典对象
   * @param value 字典项值
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.getByValue(1)
   * // => { value: 1, label: 'a' }
   *
   * dict.getByValue(3)
   * // => undefined
   * ```
   */
  getByValue(this: Dictionary<T>, value: any): I | undefined
  /**
   * 根据指定字典项值获取字典项标签
   * @param this 字典对象
   * @param value 字典项值
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.getLabelByValue(1)
   * // => 'a'
   *
   * dict.getLabelByValue(3)
   * // => ''
   * ```
   */
  getLabelByValue(this: Dictionary<T>, value: any): string
  /**
   * 根据指定键判断是否存在字典项
   * @param this 字典对象
   * @param key 指定键
   *
   * @example
   * ```ts
   * const dict = createDictionary({ a: { value: 1, label: 'a' }, b: { value: 2, label: 'b' } })
   * dict.has('a')
   * // => true
   *
   * dict.has('c')
   * // => false
   * ```
   */
  has(this: Dictionary<T>, key: K): boolean
  /**
   * 基于自身（除过自定义方法）和新元对象组成新的字典对象
   * @param this 字典对象
   * @param meta 补充的字典元对象
   * @param methods 新字典对象自定义方法
   *
   * @example
   * ```ts
   * const dict = createDictionary(
   *   {
   *     a: { value: 1, label: 'a' },
   *     b: { value: 2, label: 'b' }
   *   },
   *   {
   *     isDict() {
   *       return true
   *     }
   *   }
   * )
   * const dict2 = dict.clone(
   *   {
   *     c: { value: 3, label: 'c' }
   *   },
   *   {
   *     isDict2() {
   *       return true
   *     }
   *   }
   * )
   *
   * dict.has('c')
   * // => false
   *
   * dict.isDict()
   * // => true
   *
   * dict2.has('c')
   * // => true
   *
   * dict2.isDict
   * // => undefined
   *
   * dict2.isDict2()
   * // => true
   * ```
   */
  clone<
    _T extends DictionaryMeta,
    _M extends DictionaryMethods<_T & Omit<T, keyof _T>> = DictionaryMethods<
      _T & Omit<T, keyof _T>
    >,
  >(
    this: Dictionary<T>,
    meta?: _T,
    methods?: _M,
  ): Dictionary<_T & Omit<T, keyof _T>> & _M
}

/**
 * 字典对象
 */
export type Dictionary<T extends DictionaryMeta = DictionaryMeta> = DictionaryBase<T> &
DictionaryBuiltinMethods<T> & { readonly _meta: T }

const builtinMethods = {
  entries(orderParams) {
    const values = Object.values(this)
    return (orderParams ? orderBy(values, ...orderParams) : values).map((value) => [
      value.key,
      value,
    ])
  },
  keys(orderParams) {
    return this.entries(orderParams).map(([key]) => key)
  },
  items(orderParams) {
    return this.entries(orderParams).map(([_, value]) => value)
  },
  values(orderParams) {
    return this.items(orderParams).map((item) => item.value)
  },
  labels(orderParams) {
    return this.items(orderParams).map((item) => item.label)
  },
  get(key) {
    return this[key as string]
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
  clone(meta, methods) {
    return createDictionary(assign({}, this._meta, meta), methods) as any
  },
} as DictionaryBuiltinMethods

const arrayPrototypeMethods = ['forEach', 'filter', 'find'] as const
arrayPrototypeMethods.forEach((method) => {
  ;(builtinMethods as any)[method] = function arrayFunc(...args: any[]) {
    return this.items()[method](...args)
  }
})

/**
 * 内置字典方法
 */
createDictionary.builtinMethods = builtinMethods

/**
 * 创建字典
 * @param meta 字典元数据
 * @param methods 自定义字典方法
 * @returns 字典对象
 *
 * @example
 * ```ts
 * const WhetherDict = createDictionary({
 *   yes: {
 *     value: 1,
 *     label: '是',
 *     enLabel: 'Yes',
 *   },
 *   no: {
 *     value: 0,
 *     label: '否',
 *     enLabel: 'No',
 *   },
 * }, {
 *   getEnLabel(key: string) {
 *     return this.get(key)?.enLabel || ''
 *   },
 * })
 *
 * WhetherDict.get('yes')
 * // => { key: 'yes', value: 1, label: '是', enLabel: 'Yes' }
 *
 * WhetherDict.getByValue(1)
 * // => { key: 'yes', value: 1, label: '是', enLabel: 'Yes' }
 *
 * WhetherDict.get('yes') === WhetherDict.yes
 * // => true
 *
 * WhetherDict.getValue('yes')
 * // => 1
 * ```
 */
export function createDictionary<
  T extends DictionaryMeta,
  M extends DictionaryMethods<T> = DictionaryMethods<T>,
>(meta: T, methods: M = {} as M) {
  const dictionary = {} as Dictionary<T> & M

  Object.entries(meta).forEach(([key, value]) => {
    const item = assign({ label: '' }, value, { key })
    item.label = String(item.label == null ? '' : item.label)
    ;(dictionary as any)[key] = item
  })

  Object.entries(assign(builtinMethods, methods)).forEach(([name, method]) => {
    Object.defineProperty(dictionary, name, {
      writable: true,
      value: method.bind(dictionary),
    })
  })

  Object.defineProperty(dictionary, '_meta', { value: meta })

  return dictionary
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const dict = createDictionary(
      {
        a: {
          value: 0,
          label: 'a',
        },
        b: {
          value: 1,
          label: 'b',
        },
      },
      {
        getLen() {
          return this.items().length
        },
      },
    )

    it('内置函数', () => {
      expect(dict.entries()).toStrictEqual([
        ['a', { key: 'a', value: 0, label: 'a' }],
        ['b', { key: 'b', value: 1, label: 'b' }],
      ])
      expect(dict.items()).toStrictEqual([
        { key: 'a', value: 0, label: 'a' },
        { key: 'b', value: 1, label: 'b' },
      ])
      expect(dict.keys()).toStrictEqual(['a', 'b'])
      expect(dict.values()).toStrictEqual([0, 1])
      expect(dict.labels()).toStrictEqual(['a', 'b'])

      expect(dict.keys(['value', 'desc'])).toStrictEqual(['b', 'a'])
      expect(dict.values(['value', 'desc'])).toStrictEqual([1, 0])
      expect(dict.labels(['value', 'desc'])).toStrictEqual(['b', 'a'])

      expect(dict.get('a')).toStrictEqual({ key: 'a', value: 0, label: 'a' })
      expect(dict.getValue('a')).toBe(0)
      expect(dict.getLabel('a')).toBe('a')
      expect(dict.getByValue(0)).toStrictEqual({ key: 'a', value: 0, label: 'a' })
      expect(dict.getLabelByValue(0)).toBe('a')

      expect(dict.find((item) => item.value === 1)).toStrictEqual({
        key: 'b',
        value: 1,
        label: 'b',
      })
      expect(dict.filter((item) => item.value === 1)).toStrictEqual([
        {
          key: 'b',
          value: 1,
          label: 'b',
        },
      ])

      expect(dict.has('a')).toBe(true)
      expect(dict.a === dict.get('a')).toBe(true)
    })

    it('克隆字典', () => {
      const cloned = dict.clone({ c: { value: 'c', label: 'c' } })
      expect(cloned.keys()).toStrictEqual(['a', 'b', 'c'])
      expect(cloned.values()).toStrictEqual([0, 1, 'c'])
    })
  })
}
