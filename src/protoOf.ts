/**
 * Object.getPrototypeOf
 */
export const protoOf = Object.getPrototypeOf

if (import.meta.vitest) {
  it('基础功能', () => {
    expect(protoOf('string')).toBe(String.prototype)
    expect(protoOf(1)).toBe(Number.prototype)
    expect(protoOf({})).toBe(Object.prototype)
    expect(protoOf(() => {})).toBe(Function.prototype)
  })
}
