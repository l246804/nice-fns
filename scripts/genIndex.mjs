import { basename, extname, resolve } from 'node:path'
import { cwd } from 'node:process'
import fs from 'fs-extra'
import { isString } from 'lodash-unified'

const srcDir = resolve(cwd(), 'src')
const indexFile = resolve(srcDir, 'index.ts')
const exclude = [/^_/]

function genTemplate(fn) {
  return `export * from './${fn}'`
}

function readFns() {
  return fs
    .readdirSync(srcDir)
    .map((name) => basename(name, extname(name)))
    .filter((name) => !exclude.some((reg) => isString(reg) ? reg === name : reg.test(name)))
}

function writeFns(fns = []) {
  fs.writeFileSync(indexFile, `${fns.map(genTemplate).join('\n')}\n`)
}

function start() {
  const fns = readFns()
  writeFns(fns)
}

start()
