import { defineConfig } from '@rhao/gen-index'
import config from './gi.config'

export default defineConfig({
  ...config,
  allowEmpty: true,
  exclude: ['**/*'],
  hooks: {},
})
