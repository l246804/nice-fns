/**
 * `Object.getOwnPropertySymbols`
 */
export const symbolsOf = Object.getOwnPropertySymbols

if (import.meta.vitest) {
  it('基础功能', async () => {
    const syb = Symbol('symbol')
    const obj = { [syb]: 1 }
    expect(symbolsOf(obj)[0]).toBe(syb)
  })
}
