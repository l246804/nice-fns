import { pick } from 'lodash-unified'

/**
 * 分配来源对象上属于目标对象自身的属性值
 * @param target 目标对象
 * @param sources 一个或多个来源对象
 *
 * @example
 * ```ts
 * assignOwn({ a: 1 }, { a: 2, b: 3 })
 * // => { a: 2 }
 * ```
 */
export function assignOwn<T extends {}>(target: T, ...sources: any[]): T {
  const only = Object.assign({}, ...sources)
  return Object.assign(target, pick(only, Object.keys(target)))
}

if (import.meta.vitest) {
  describe('单源分配', () => {
    const target = { a: 1, b: 2 }

    const source = { a: [1, 2, 3], c: 100, d: 200 }
    const clonedSource = _.cloneDeep(source)

    const result = { a: [1, 2, 3], b: 2 }

    it('对比结果', () => {
      expect(assignOwn(target, source)).toStrictEqual(result)
    })

    it('对比分配源', () => {
      expect(source).toStrictEqual(clonedSource)
    })
  })

  describe('多源分配', () => {
    const target = { a: 1, b: 2 }

    const source = { a: [1, 2, 3], c: 100, d: 200 }
    const clonedSource = _.cloneDeep(source)
    const source2 = { b: { d: 4 }, c: 300 }
    const clonedSource2 = _.cloneDeep(source2)

    const result = { a: [1, 2, 3], b: { d: 4 } }

    it('对比结果', () => {
      expect(assignOwn(target, source, source2)).toStrictEqual(result)
    })

    it('对比分配源1', () => {
      expect(source).toStrictEqual(clonedSource)
    })

    it('对比分配源2', () => {
      expect(source2).toStrictEqual(clonedSource2)
    })
  })
}
