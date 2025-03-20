import { defineConfig } from '@rhao/gen-index'

export default defineConfig({
  dirs: ['src'],
  glob: {
    ignore: ['_*.ts'],
  },
})
