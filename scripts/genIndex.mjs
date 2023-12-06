import { argv } from 'node:process'
import fs from 'fs-extra'
import { readFns, resolveEntryInfo } from '../internal/fns.mjs'

const args = argv.slice(2)
const { file: entryFile, relative: relativePrefix } = resolveEntryInfo(args.includes('-D'))

function genTemplate(fn) {
  return `export * from '${relativePrefix}/${fn}'`
}

function writeFns(fns = []) {
  fs.writeFileSync(entryFile, `${fns.map(genTemplate).join('\n')}\n`)
}

function start() {
  const fns = readFns()
  writeFns(fns)
}

start()
