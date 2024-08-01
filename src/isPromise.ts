/**
 * 检测值是否是 `Promise` 类型
 * @param val 待检测值
 */
export function isPromise(val: any): val is Promise<any> {
  return val instanceof Promise
}
