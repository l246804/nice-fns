/**
 * 线程睡眠
 *
 * @param ms 睡眠时间，单位：`ms`
 *
 * @example
 * ```ts
 * async function run() {
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

/**
 * 线程睡眠（同步版）
 *
 * ***注意：该函数将会阻塞线程执行。***
 *
 * @param ms 睡眠时间，单位 `ms`
 *
 * @example
 * ```ts
 * function run() {
 *   console.log(Date.now())
 *   sleep(1000)
 *   console.log(Date.now())
 * }
 * ```
 */
export function sleepSync(ms: number) {
  if (ms <= 0) return

  const start = Date.now()
  while (Date.now() - start >= ms) continue
}

if (import.meta.vitest) {
  it('基础功能', async () => {
    const ms = 1000
    const start = Date.now()
    await sleep(1000)
    const diff = Date.now() - start
    const value = diff % ms

    // 误差在 0 - 100 内即正常
    expect(value >= 0 && value <= 100).toBe(true)
  })

  it('同步版', () => {
    const ms = 1000
    const start = Date.now()
    sleep(1000)
    const diff = Date.now() - start
    const value = diff % ms

    // 误差在 0 - 100 内即正常
    expect(value >= 0 && value <= 100).toBe(true)
  })
}
