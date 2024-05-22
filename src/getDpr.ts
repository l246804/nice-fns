/**
 * 获取客户端设备像素比
 */
export function getDpr() {
  return window?.devicePixelRatio || 1
}
