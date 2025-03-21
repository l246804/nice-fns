import { resolveClientRunProfile } from './clientRun'

/**
 * 获取客户端设备像素比
 */
export function getDpr() {
  return resolveClientRunProfile().window?.devicePixelRatio || 1
}
