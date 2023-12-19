/* eslint-disable no-console */
/**
 * 基于 `console` 创建简单的信息输出工具
 * @param module 模块名
 * @returns 信息输出工具
 *
 * @example
 * ```
 * const logger = createLogger('Module A')
 *
 * logger.info('这是一条普通消息')
 * // => '[Module A]: 这是一条普通消息'
 *
 * logger.warn('这是一条警告')
 * // => '[Module A warn]: 这是一条警告'
 *
 * logger.error('这是一条错误')
 * // => '[Module A error]: 这是一条错误'
 * ```
 */
export function createLogger(module: string) {
  return {
    /**
     * 输出一条普通信息，同 `console.log`
     * @param msg 消息内容
     * @param args 额外参数
     */
    info(msg: string, ...args: any[]) {
      console.info(`[${module}]: ${msg}`, ...args)
    },
    /**
     * 输出一条警告信息，同 `console.warn`
     * @param msg 消息内容
     * @param args 额外参数
     */
    warn(msg: string, ...args: any[]) {
      console.warn(`[${module} warn]: ${msg}`, ...args)
    },
    /**
     * 输出一条错误信息，同 `console.error`
     * @param msg 消息内容
     * @param args 额外参数
     */
    error(msg: string, ...args: any[]) {
      console.error(`[${module} error]: ${msg}`, ...args)
    },
  }
}
