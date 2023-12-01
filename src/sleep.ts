/**
 * 线程睡眠
 *
 * @param ms 睡眠时间，单位：`ms`
 *
 * @example
 * ```ts
 * async run() {
 *   console.log(Date.now())
 *   await sleep(1000)
 *   console.log(Date.now())
 * }
 * ```
 */
export function sleep(ms = 0) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

if (import.meta.vitest) {
  it('基础功能', async () => {
    const ms = 1000
    const start = Date.now()
    await sleep(1000)
    const diff = Date.now() - start
    const value = diff % ms

    // 误差在 0 - 50 内即正常
    expect(value >= 0 && value <= 50).toBe(true)
  })
}
