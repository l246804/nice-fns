import { isClient } from './isClient'

/**
 * 默认 `window` 对象，非客户端环境时为 `undefined`
 */
export const defaultWindow = isClient ? window : undefined
