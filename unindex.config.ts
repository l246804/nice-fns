import { defineConfig } from 'unindex'

export default defineConfig({
  entryDir: 'src',
  glob: {
    patterns: ['**/*.ts'],
    ignore: ['_*.ts', 'compat/*.ts'],
  },
  contentGenerator(ctx) {
    return `\
${ctx.codes.join('\n')}
export * from 'es-toolkit';
// override types
export { isFunction } from './isFunction.ts';
`
  },
})
