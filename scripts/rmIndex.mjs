import { resolve } from 'node:path'
import { cwd } from 'node:process'
import fs from 'fs-extra'

fs.removeSync(resolve(cwd(), 'src/index.ts'))
