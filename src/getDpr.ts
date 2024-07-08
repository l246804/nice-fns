import { clientRun } from './clientRun'

/**
 * 获取客户端设备像素比
 */
export function getDpr() {
  return clientRun.resolveProfile().window?.devicePixelRatio || 1
}
