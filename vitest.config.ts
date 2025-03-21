import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dir: 'src',
    includeSource: ['**/*.ts'],
  },
  plugins: [
    AutoImport({
      imports: [
        'vitest',
        { from: 'es-toolkit/compat', imports: [{ name: '*', as: '_' }] },
        { from: 'vitest', imports: ['expectTypeOf'] },
      ],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
})
