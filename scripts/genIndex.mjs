import { resolve } from 'node:path'
import { cwd } from 'node:process'
import fs from 'fs-extra'

const srcDir = resolve(cwd(), 'src')
const indexFile = resolve(srcDir, 'index.ts')
const exclude = []

function genTemplate(fn) {
  return `export * from './${fn}'`
}

function readFns() {
  return fs
    .readdirSync(srcDir)
    .filter((name) => fs.statSync(resolve(srcDir, name)).isDirectory() && !exclude.includes(name))
}

function writeFns(fns = []) {
  fs.writeFileSync(indexFile, `${fns.map(genTemplate).join('\n')}\n`)
}

function start() {
  const fns = readFns()
  writeFns(fns)
}

start()
