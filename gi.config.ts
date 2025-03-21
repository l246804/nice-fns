import { defineConfig } from '@rhao/gen-index'

export default defineConfig({
  dirs: ['src'],
  glob: {
    ignore: ['_*.ts'],
  },
  hooks: {
    beforeWrite(ctx) {
      ctx.content += `
export * from 'es-toolkit';
// override types
export { isFunction } from './isFunction';
`
    },
  },
})
