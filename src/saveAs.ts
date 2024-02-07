import type { PromiseFn } from '@rhao/types-base'
import { isFunction, isObject } from 'lodash-unified'
import { saveAs as baseSaveAs } from './_saveAs'

export interface SaveAsOptions {
  /**
   * 下载文件名称
   */
  filename?: string
  /**
   * 通过查询获取文件流，支持动态修改文件名，最终返回非 `Blob` 数据时将停止后续操作
   */
  fetcher?: PromiseFn<[data: string, options: SaveAsOptions]>
}

/**
 * 默认配置
 */
saveAs.defaults = {} as Omit<SaveAsOptions, 'filename'>

type SaveAsData = string | Blob

/**
 * FileSaver 现代版，支持通过 `fetcher` 获取文件流
 * @param data 文件下载地址或 `Blob` 数据
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 默认配置 fetcher
 * saveAs.defaults.fetcher = (url, options) => {
 *   const res = fetch(url, { method: 'GET' })
 *   const filename = parseContentDisposition(res.headers.get('Content-Disposition')).filename
 *   // 如果附件存在文件名，则设置下载文件名为附件名称
 *   if (filename) options.filename = filename
 *   // 返回 Blob 数据
 *   return res.blob()
 * }
 *
 * // 调用接口下载文件
 * saveAs('/api/example')
 *
 * // 使用原 FileSaver.saveAs
 * saveAs('http://example.com/example.img', { filename: '测试.img', fetcher: undefined })
 * ```
 */
export async function saveAs(data: SaveAsData, options?: SaveAsOptions): Promise<void>

/**
 * FileSaver 现代版，支持通过 `fetcher` 获取文件流
 * @param data 文件下载地址或 `Blob` 数据
 * @param filename 文件名
 * @param options 配置项
 *
 * @example
 * ```ts
 * // 默认配置 fetcher
 * saveAs.defaults.fetcher = (url, options) => {
 *   const res = fetch(url, { method: 'GET' })
 *   const filename = parseContentDisposition(res.headers.get('Content-Disposition')).filename
 *   // 如果附件存在文件名，则设置下载文件名为附件名称
 *   if (filename) options.filename = filename
 *   // 返回 Blob 数据
 *   return res.blob()
 * }
 *
 * // 调用接口下载文件
 * saveAs('/api/example')
 *
 * // 使用原 FileSaver.saveAs
 * saveAs('http://example.com/example.img', '测试.img', { fetcher: undefined })
 * ```
 */
export async function saveAs(
  data: SaveAsData,
  filename?: string,
  options?: SaveAsOptions,
): Promise<void>

/**
 * FileSaver 现代版，支持通过 `fetcher` 获取文件流
 * @param data 文件下载地址或 `Blob` 数据
 * @param filenameOrOptions 文件名或配置项
 * @param options 配置项
 */
export async function saveAs(data: any, filenameOrOptions: any = '', options: any = {}) {
  const opts: SaveAsOptions = {
    ...saveAs.defaults,
    ...(filenameOrOptions && isObject(filenameOrOptions)
      ? filenameOrOptions
      : { filename: filenameOrOptions, ...options }),
  }

  if (!isFunction(opts.fetcher) || typeof data !== 'string') {
    baseSaveAs(data, opts.filename)
    return
  }

  const blob = await opts.fetcher(data, opts)
  if (!(blob instanceof Blob)) return

  baseSaveAs(blob, opts.filename)
}
