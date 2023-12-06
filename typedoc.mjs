import { join } from 'node:path'
import { fnRoot, readFns } from './internal/fns.mjs'

/**
 *  @type {import('typedoc').TypeDocOptions}
 */
export default {
  entryPoints: readFns(true).map((fn) => join(fnRoot, fn)),
  plugin: ['typedoc-plugin-markdown', 'typedoc-vitepress-theme'],
  readme: 'none',
  includeVersion: true,
  outputFileStrategy: 'Modules',
  disableSources: true,
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hideGenerator: true,
  parametersFormat: 'table',
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  groupOrder: ['Variables', 'Functions', '*'],
}
