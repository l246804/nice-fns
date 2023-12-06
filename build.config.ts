import { defineBuildConfig } from 'unbuild'
import type { BuildConfig, BuildEntry } from 'unbuild'

function createEntry(format: 'esm' | 'cjs') {
  return {
    input: 'src',
    builder: 'mkdist',
    format,
    ext: format === 'esm' ? 'mjs' : 'cjs',
    esbuild: {
      define: {
        'import.meta.vitest': 'false',
      },
      minify: true,
    },
  } as BuildEntry
}

function createUMD(minify = false) {
  return {
    entries: ['src/index'],
    failOnWarn: false,
    declaration: false,
    clean: true,
    rollup: {
      output: {
        name: 'NiceFns',
        format: 'umd',
        globals: {
          'lodash-unified': '_',
        },
        entryFileNames: `umd${minify ? '.min' : ''}.js`,
      },
      esbuild: {
        define: {
          'import.meta.vitest': 'false',
        },
        minify,
        target: 'ES2018',
      },
    },
  } as BuildConfig
}

export default defineBuildConfig([
  createUMD(),
  createUMD(true),
  {
    entries: [createEntry('esm'), createEntry('cjs')],
    clean: true,
    declaration: true,
    failOnWarn: false,
    rollup: {
      emitCJS: true,
      dts: {
        compilerOptions: {
          noEmitOnError: false,
        },
      },
    },
  },
])
