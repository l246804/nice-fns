import type { IfUnknown } from '@rhao/types-base'
import { createDictionary } from './createDictionary'
import type { DictionaryItem, DictionaryMeta, DictionaryMethods } from './createDictionary'

type _DictionaryItem<T extends object = object, VK extends string = 'value'> = DictionaryItem<
  // @ts-expect-error
  IfUnknown<T[VK], any>
> & { data: T }

type _DictionaryMethods<T extends object = object, VK extends string = 'value'> = DictionaryMethods<
  DictionaryMeta<_DictionaryItem<T, VK>>
>

export interface ArrayToDictionaryOptions<
  VK extends string = 'value',
  M extends _DictionaryMethods<any, VK> = _DictionaryMethods<any, VK>,
> {
  /**
   * 字典键，必须为唯一值字段
   * @default options.valueKey
   */
  key?: string
  /**
   * 字典项的值键，必须为唯一值字段
   * @default 'value'
   */
  valueKey?: VK
  /**
   * 字典项的标签键
   * @default 'label'
   */
  labelKey?: string
  /**
   * 字典自定义方法
   */
  methods?: M
}

/**
 * 对象数组转为字典对象
 * @param arr 对象数组
 * @param options 配置项
 * @returns 字典
 *
 * @example
 * ```ts
 * const arr = [{ id: 1, text: 'one' }, { id: 2, text: 'three' }]
 *
 * const dict arrayToDictionary(arr, {
 *   // 使用 text 作为字典键
 *   key: 'text',
 *   valueKey: 'id',
 *   labelKey: 'text',
 *   // 自定义字典方法
 *   methods: {
 *     getId(key: string) {
 *       return this.get(key)?.data.id
 *     }
 *   }
 * })
 *
 * // 通过字典键直接获取字典项
 * dict.one
 * // => { key: 'one', value: 1, label: 'one', data: { id: 1, text: 'one' } }
 *
 * dict.getId('one')
 * // => 1
 * ```
 */
export function arrayToDictionary<
  T extends object,
  VK extends string = 'value',
  M extends _DictionaryMethods<T, VK> = _DictionaryMethods<T, VK>,
>(arr: T[], options: ArrayToDictionaryOptions<VK, M> = {}) {
  const { valueKey = 'value', labelKey = 'label', key = valueKey, methods = {} } = options

  const dict: any = {}
  for (const item of arr as any[]) {
    const obj = { value: item[valueKey], label: String(item[labelKey] ?? ''), data: item }
    const _key = item[key]
    if (_key != null && String(_key)) dict[_key] = obj
  }

  return createDictionary(dict as DictionaryMeta<_DictionaryItem<T, VK>>, methods as M)
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const array = [
      { id: 1, text: 'one' },
      { id: 2, text: 'three' },
    ]
    const dict = arrayToDictionary(array, {
      key: 'text',
      valueKey: 'id',
      labelKey: 'text',
      methods: {
        getId(key: string) {
          return this.get(key)?.data?.id
        },
      },
    })

    it('内置函数', () => {
      expect(dict.get('one')?.data).toStrictEqual(array[0])
      expect(dict.getByValue(1)?.data === array[0]).toBe(true)

      expect(dict.find((item) => item.data.id === 1)?.data).toStrictEqual(array[0])
      expect(dict.filter((item) => item.data.id > 1).map((item) => item.data)).toStrictEqual([array[1]])
    })

    it('自定义函数', () => {
      expect(dict.getId('one')).toBe(1)
    })
  })
}
