import type { ListIteratee, ListIterator, Many, NotVoid } from 'lodash'

/**
 * `lodash.orderBy` 支持的排序参数
 */
export type _OrderByParams<T> =
    | [iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean | 'asc' | 'desc'>]
    | [iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean | 'asc' | 'desc'>]
