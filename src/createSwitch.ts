import type { Fn, Getter, NoopFn } from '@rhao/types-base'
import { createCallbacks } from './createCallbacks'

type SwitchCallback<T> = Fn<[value: T]>

export interface CreateSwitchOptions<T = boolean> {
  /**
   * 初始值
   * @default false
   */
  initialValue?: T
  /**
   * 打开时的值
   * @default true
   */
  openValue?: T
  /**
   * 关闭时的值
   * @default false
   */
  closeValue?: T
  /**
   * 一次性开关，如果设为 `true`，则在第一次切换之后切换无效，直到 `reset` 被调用。
   * @default false
   */
  once?: boolean
}

export interface SwitchControls<T> {
  /**
   * 切换开关状态
   */
  toggle(value?: T): void
  /**
   * 打开开关
   */
  open(): void
  /**
   * 关闭开关
   */
  close(): void
  /**
   * 重置开关
   */
  reset(): void
  /**
   * 注册回调句柄，返回移除回调句柄函数
   */
  on(callback: SwitchCallback<T>): NoopFn
  /**
   * 移除回调句柄
   * @param callback 回调句柄
   */
  off(callback: SwitchCallback<T>): void
  /**
   * 重置回调句柄
   */
  offAll(): void
}

/**
 * 创建开关和控制器
 *
 * @param options 配置项
 *
 * @example
 * ```ts
 * const [isCanceled, cancelControls] = createSwitch()
 *
 * const onToggle = (val) => {
 *   console.log(`当前是${val ? '开启' : '关闭'}状态`)
 * }
 * // 注册回调句柄
 * cancelControls.on(onToggle)
 *
 * isCanceled()
 * // => false
 *
 * cancelControls.toggle()
 * isCanceled()
 * // => true
 * // 控制台：当前是开启状态
 *
 * // 移除回调句柄
 * cancelControls.off(onToggle)
 *
 * cancelControls.toggle()
 * isCanceled()
 * // => false
 *
 * cancelControls.open()
 * isCanceled()
 * // => true
 *
 * cancelControls.close()
 * isCanceled()
 * // => false
 *
 * cancelControls.open()
 * // 还原为初始状态
 * cancelControls.reset()
 * isCanceled()
 * // => false
 * ```
 */
export function createSwitch<T = boolean>(
  options: CreateSwitchOptions<T> = {},
): [readValue: Getter<T>, SwitchControls<T>] {
  const { initialValue = false, closeValue = false, openValue = true, once = false } = options

  let allowWrite = true
  let value = initialValue as T

  const callbacks = createCallbacks<SwitchCallback<T>>()

  function read() {
    return value
  }
  function write(_value: any) {
    if (!allowWrite) return
    if (once) allowWrite = false

    value = _value
    callbacks.runAll(value)
  }
  function toggle(_value?: T) {
    if (_value != null && [openValue, closeValue].includes(_value))
      write(_value)
    else
      write(value === openValue ? closeValue : openValue)
  }
  function open() {
    write(openValue)
  }
  function close() {
    write(closeValue)
  }
  function reset() {
    allowWrite = true
    write(initialValue)
  }

  return [
    read,
    {
      toggle,
      open,
      close,
      reset,
      on: callbacks.add,
      off: callbacks.remove,
      offAll: callbacks.reset,
    },
  ]
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const [isFlag, flag] = createSwitch()

    it('切换状态', () => {
      flag.toggle()
      expect(isFlag()).toBe(true)

      flag.close()
      expect(isFlag()).toBe(false)

      flag.open()
      expect(isFlag()).toBe(true)

      flag.reset()
      expect(isFlag()).toBe(false)

      flag.toggle(false)
      expect(isFlag()).toBe(false)

      flag.toggle(true)
      expect(isFlag()).toBe(true)
    })

    it('注册切换回调', () => {
      const onToggle = vi.fn()
      flag.on(onToggle)

      flag.toggle()
      expect(onToggle).toHaveBeenCalled()
    })
  })
}
