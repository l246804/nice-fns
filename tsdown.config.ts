import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: {
      index: './src/index.ts',
      compat: './src/compat/index.ts',
    },
    target: 'es2022',
    platform: 'browser',
    define: {
      'import.meta.vitest': 'false',
    },
  },
  {
    entry: './src/index.ts',
    target: 'es2022',
    platform: 'browser',
    define: {
      'import.meta.vitest': 'false',
    },
    format: 'umd',
    globalName: 'NiceFns',
    dts: false,
    sourcemap: true,
    outputOptions: {
      globals: {
        'es-toolkit': '_',
        'es-toolkit/compat': '_',
      },
    },
  },
])
