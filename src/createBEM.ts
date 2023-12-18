import type { MaybeGetter } from '@rhao/types-base'
import { toValue } from './toValue'

export interface CreateBEMOptions {
  /**
   * 命名空间
   * @default ''
   */
  namespace: MaybeGetter<string>
}

/**
 * 默认配置
 */
createBEM.defaults = {
  namespace: '',
} as CreateBEMOptions

function _bem(namespace = '', block = '', blockSuffix = '', element = '', modifier = '') {
  let cls = ''

  if (namespace) cls += namespace

  if (block) cls += `${cls ? '-' : ''}${block}`

  if (blockSuffix) cls += `-${blockSuffix}`

  if (element) cls += `__${element}`

  if (modifier) cls += `--${modifier}`

  return cls
}

/**
 * 创建 `BEM` 格式的 `CSS` 类名辅助工具
 *
 * @param block 块级名称
 * @param namespaceOverrides 覆盖默认命名空间名称
 *
 * @example
 * ```ts
 * const ns = createBEM('block', 'el')
 * ns.b()
 * // => 'el-block'
 *
 * ns.be('header', 'span')
 * // => 'el-block-header__span'
 *
 * ns.bem('header', 'span', 'empty')
 * // => 'el-block-header__span--empty'
 *
 * ns.e('header')
 * // => 'el-block__header'
 *
 * ns.em('span', 'empty')
 * // => 'el-block__span--empty'
 *
 * ns.m('empty')
 * // => 'el-block--empty'
 * ```
 */
export function createBEM(
  block: string,
  namespaceOverrides: MaybeGetter<string> = createBEM.defaults.namespace,
) {
  const opts = { namespace: namespaceOverrides }
  const namespace = toValue(opts.namespace)

  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')
  const e = (element = '') => (element ? _bem(namespace, block, '', element, '') : '')
  const m = (modifier = '') => (modifier ? _bem(namespace, block, '', '', modifier) : '')
  const be = (blockSuffix = '', element = '') =>
    blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : ''
  const em = (element = '', modifier = '') =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : ''
  const bm = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : ''
  const bem = (blockSuffix = '', element = '', modifier = '') =>
    blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : ''

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
  }
}

if (import.meta.vitest) {
  const bem = createBEM('test', 'app')

  describe('基础功能', () => {
    it('Block', () => {
      expect(bem.b()).toBe('app-test')
      expect(bem.b('box')).toBe('app-test-box')
    })

    it('Element', () => {
      expect(bem.be('box', 'span')).toBe('app-test-box__span')
      expect(bem.e('span')).toBe('app-test__span')
      expect(bem.em('span', 'danger')).toBe('app-test__span--danger')
    })

    it('Modifier', () => {
      expect(bem.bm('box', 'danger')).toBe('app-test-box--danger')
      expect(bem.m('success')).toBe('app-test--success')
    })
  })
}
