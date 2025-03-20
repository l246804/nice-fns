import { defineConfig } from '@rslib/core'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2022',
      dts: {
        bundle: true,
      },
      autoExtension: false,
      output: {
        target: 'web',
        filename: {
          js: '[name].js',
        },
        externals: ['axios'],
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
      },
    },
  ],
  source: {
    define: {
      'import.meta.vitest': 'false',
    },
  },
})
