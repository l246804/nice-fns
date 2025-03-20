import { isFunction, isPromise } from './esToolkit'

/**
 * 检测值是否支持 `then()` 回调
 * @param val 待检测值
 */
export function isPromiseLike(val: any): val is PromiseLike<any> {
  return val != null && (isPromise(val) || isFunction(val.then))
}
