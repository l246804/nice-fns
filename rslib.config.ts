import { defineConfig } from '@rslib/core'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2022',
      dts: true,
      output: {
        target: 'web',
      },
    },
    {
      format: 'esm',
      syntax: 'es2022',
      dts: true,
      bundle: false,
      source: {
        entry: {
          index: './src/_esToolkitCompat.ts',
        },
      },
    },
    {
      format: 'umd',
      syntax: 'es2022',
      umdName: 'NiceFns',
      output: {
        filename: {
          js: 'umd.js',
        },
        externals: {
          'es-toolkit': '_',
        },
      },
    },
    {
      format: 'umd',
      syntax: 'es2022',
      umdName: 'NiceFns',
      output: {
        filename: {
          js: 'umd.min.js',
        },
        minify: true,
        externals: {
          'es-toolkit': '_',
        },
      },
    },
  ],
  source: {
    define: {
      'import.meta.vitest': 'false',
    },
  },
})
