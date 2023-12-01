/**
 * 判断当前环境是否是客户端
 */
export const isClient = typeof window !== 'undefined'

if (import.meta.vitest) {
  it('node 环境', () => {
    expect(isClient).toBe(false)
  })
}
