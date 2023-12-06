import { argv } from 'node:process'
import fs from 'fs-extra'
import { resolveEntryInfo } from '../internal/fns.mjs'

const args = argv.slice(2)
const { file: entryFile } = resolveEntryInfo(args.includes('-D'))

fs.removeSync(entryFile)
