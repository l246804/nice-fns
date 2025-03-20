export type Primitive = null | undefined | string | number | boolean | symbol | bigint

export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R

export type MaybeFn<T, Args extends any[] = any[]> = T | Fn<Args, T>

export type Nil = null | undefined

export type MaybeNil<T> = T | null | undefined

export type IfNil<T, TV, FV> = [T] extends [Nil] ? TV : FV

export type Simplify<T> = {
  [K in keyof T]: T[K]
}

export type PartialWith<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type WithChildren<
  T,
  ChildrenKey extends string = 'children',
  Required extends boolean = false,
> = T &
PartialWith<
    Record<ChildrenKey, WithChildren<T, ChildrenKey, Required>[]>,
    Required extends true ? never : ChildrenKey
  >

export type IsNever<T> = [T] extends [never] ? true : false

export type IfNever<T, TypeIfNever = true, TypeIfNotNever = false> = IsNever<T> extends true
  ? TypeIfNever
  : TypeIfNotNever

export type IsUnknown<T> = unknown extends T // `T` can be `unknown` or `any`
  ? IfNil<T, false, true>
  : false

export type IfUnknown<T, TypeIfUnknown = true, TypeIfNotUnknown = false> = IsUnknown<T> extends true
  ? TypeIfUnknown
  : TypeIfNotUnknown

export type IsAny<T> = 0 extends 1 & NoInfer<T> ? true : false

export type IfAny<T, TypeIfAny = true, TypeIfNotAny = false> = IsAny<T> extends true
  ? TypeIfAny
  : TypeIfNotAny

export type UnionHas<T, U> = IfNever<
  T,
  false,
  IfUnknown<T, false, IfAny<T, false, U extends T ? true : false>>
>

export type IfTrue<T, V = true, F = false> = [T] extends [true] ? V : F

export type PromiseFn<Args extends any[], R = unknown> = (...args: Args) => Promise<Awaited<R>>

export type IfEmpty<T, V = true, F = false> = [T] extends ['' | Nil] ? V : F

export type ReplaceEmpty<T, U> = IfEmpty<T, U, T>

export type ReplaceNever<T, U> = IfNever<T, U, T>

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>)

export type KeyOf<T, BaseType extends Primitive = PropertyKey> = T extends Primitive
  ? BaseType
  : LiteralUnion<keyof T, BaseType>
