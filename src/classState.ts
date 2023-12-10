import { isArray } from 'lodash-unified'

type StateClass = string
type StateClasses = (string | [stateClass: string, state?: boolean, prefix?: string])[]

interface Is {
  /**
   * 单个状态
   * @param stateClass 状态类名
   * @param state 状态值
   * @param prefix 状态类名前缀
   * @returns 单个类名
   *
   * @example
   * ```ts
   * const is = classState()
   *
   * is('is-state')
   * // => 'is-state'
   *
   * is('is-state', false)
   * // => ''
   *
   * is('state', true, 'is-')
   * // => 'is-state'
   * ```
   */
  (stateClass: StateClass, state?: boolean, prefix?: string): string
  /**
   * 多个状态
   * @param stateClasses 状态类名列表
   * @param prefix 状态类名前缀
   * @returns 类名列表
   *
   * @example
   * ```ts
   * const is = classState()
   *
   * is(['is-state', ['is-state2', false], ['is-state3', true]])
   * // => ['is-state', '', 'is-state3']
   *
   * is(['state', ['state2', false], ['state3', true, 'no-']], 'is-')
   * // => ['is-state', '', 'no-state3']
   * ```
   */
  (stateClasses: StateClasses, prefix?: string): string[]
}

/**
 * 前缀为 `is-` 的状态函数
 *
 * @default
 * ```ts
 * classState('is-')
 * ```
 */
classState.is = classState('is-')

/**
 * 创建类名状态函数，通过状态判定是否使用类名
 * @param statePrefix 状态类名前缀
 * @returns 状态函数
 *
 * @example
 * ```ts
 * const is = classState()
 *
 * is('is-state')
 * // => 'is-state'
 *
 * is('is-state', false)
 * // => ''
 *
 * is('state', true, 'is-')
 * // => 'is-state'
 *
 * is(['is-state', ['is-state2', false], ['is-state3', true]])
 * // => ['is-state', '', 'is-state3']
 *
 * is(['state', ['state2', false], ['state3', true, 'no-']], 'is-')
 * // => ['is-state', '', 'no-state3']
 * ```
 */
export function classState(statePrefix = ''): Is {
  return function is(...args: any[]): any {
    const [stateClass, state, prefix = statePrefix] = args
    const stateClasses: [stateClass: string, state: boolean, prefix: string][] = []

    if (isArray(stateClass)) {
      // ['cls1', ['cls2'], ['cls3', false], ['cls4', true, 'no-']]
      const prefix = typeof state === 'string' ? state : statePrefix
      stateClass.forEach((item) => {
        if (typeof item === 'string') {
          stateClasses.push([item, true, prefix])
        }
        else {
          const [cls, state = true, _prefix = prefix] = item
          stateClasses.push([cls, state, _prefix])
        }
      })
    }
    else {
      stateClasses.push([stateClass, state === undefined ? true : state, prefix])
    }

    const result = stateClasses.map(([cls, state, prefix]) => (state ? prefix + cls : ''))
    return isArray(stateClass) ? result : result[0] || ''
  }
}

if (import.meta.vitest) {
  describe('基础功能', () => {
    const is = classState()

    it('单状态类', () => {
      expect(is('is-state')).toBe('is-state')
      expect(is('is-state2', false)).toBe('')
      expect(is('state', true, 'is-')).toBe('is-state')
    })

    it('多状态类', () => {
      expect(is(['is-state', ['is-state2', false], ['is-state3', true]])).toStrictEqual([
        'is-state',
        '',
        'is-state3',
      ])
      expect(is(['state', ['state2', false], ['state3', true, 'no-']], 'is-')).toStrictEqual([
        'is-state',
        '',
        'no-state3',
      ])
    })

    it('classState.is', () => {
      expect(classState.is('state')).toBe('is-state')
      expect(classState.is('state', false)).toBe('')
      expect(classState.is('state', true, 'no-')).toBe('no-state')

      expect(classState.is(['state', ['state2', false], ['state3', true, 'no-']])).toStrictEqual([
        'is-state',
        '',
        'no-state3',
      ])
    })
  })
}
