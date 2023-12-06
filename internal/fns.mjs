import { basename, extname, resolve } from 'node:path'
import { cwd } from 'node:process'
import fs from 'fs-extra'
import { isString } from 'lodash-unified'

export const fnRoot = resolve(cwd(), 'src')
export const fnIndexFile = resolve(fnRoot, 'index.ts')

export const docRoot = resolve(cwd(), 'docs')
export const docLibFile = resolve(docRoot, '.vitepress', 'nice-fns.ts')

export function resolveEntryInfo(docMode = false) {
  return {
    file: docMode ? docLibFile : fnIndexFile,
    relative: docMode ? '../../src' : '.',
  }
}

const exclude = [/^_/]

export function readFns(preserveExtname = false) {
  return fs
    .readdirSync(fnRoot)
    .map((name) => basename(name, preserveExtname ? '' : extname(name)))
    .filter((name) => !exclude.some((reg) => isString(reg) ? reg === name : reg.test(name)))
}
