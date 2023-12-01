import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    dir: 'src',
    includeSource: ['**/*.ts'],
  },
  plugins: [
    AutoImport({
      imports: [
        'vitest',
        { from: 'lodash-es', imports: [{ name: '*', as: '_' }] },
        { from: 'vitest', imports: ['expectTypeOf'] },
      ],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
})
