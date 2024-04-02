import type { Nullish } from '@rhao/types-base'
import { isFunction } from 'lodash-unified'

/**
 * 自起始元素向上查找目标元素，父级元素不存在或终止条件成立时返回 `null`
 * @param source 起始元素
 * @param target 目标元素
 * @param end 终止条件
 * @returns 查找到的目标元素
 *
 * @example
 * ```ts
 * const containerElement = document.querySelector('.button-container')
 * // 事件委托
 * containerElement.addEventListener('click', handleMouseClick, { capture: true })
 *
 * function handleMouseClick(e) {
 *   // 自事件触发元素向上查找目标按钮元素，直到容器元素终止
 *   const target = findUpElement(e.target, (el) => el.classList.contains('.btn'), containerElement)
 *   if (target) {
 *     console.log(target)
 *   }
 * }
 * ```
 */
export function findUpElement<T extends Element>(
  source: Element | Nullish,
  target: T | ((el: Element) => el is T) | ((el: Element) => boolean) | Nullish,
  end?: Element | ((el: Element) => boolean),
) {
  if (!source)
    return null

  const targetFn = isFunction(target) ? target : (el: Element) => el === target
  if (targetFn(source))
    return source

  const endFn = isFunction(end) ? end : (el: Element) => el === end
  if (endFn(source))
    return null

  return findUpElement(source.parentElement, targetFn, endFn)
}
