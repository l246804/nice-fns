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
  /**
   * 格式化消息内容
   * @param msg 消息内容
   * @param type 消息类型
   * @returns 格式化后的消息内容
   *
   * @example
   * ```ts
   * const logger = createLogger('Module')
   *
   * logger.format('这是一个普通消息')
   * // => '[Module]: 这是一个普通消息'
   *
   * logger.format('这是一个警告', 'warn')
   * // => '[Module warn]: 这是一个警告'
   *
   * logger.format('这是一个错误', 'error')
   * // => '[Module error]: 这是一个错误'
   * ```
   */
  function format(msg: string, type?: string) {
    if (type != null) type = ` ${type}`
    else type = ''
    return `[${module + type}]: ${msg}`
  }

  /**
   * 输出一条普通信息，同 `console.log`
   * @param msg 消息内容
   * @param args 额外参数
   */
  function info(msg: string, ...args: any[]) {
    console.info(format(msg), ...args)
  }

  /**
   * 输出一条警告信息，同 `console.warn`
   * @param msg 消息内容
   * @param args 额外参数
   */
  function warn(msg: string, ...args: any[]) {
    console.warn(format(msg, 'warn'), ...args)
  }

  /**
   * 输出一条错误信息，同 `console.error`
   * @param msg 消息内容
   * @param args 额外参数
   */
  function error(msg: string, ...args: any[]) {
    console.error(format(msg, 'error'), ...args)
  }

  return {
    format,
    info,
    warn,
    error,
  }
}
