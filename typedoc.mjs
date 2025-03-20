/**
 *  @type {import('typedoc').TypeDocOptions}
 */
export default {
  entryPoints: ['src/*.ts'],
  plugin: ['typedoc-plugin-markdown', 'typedoc-vitepress-theme'],
  includeVersion: true,
  router: 'module',
  disableSources: true,
  groupOrder: ['Variables', 'Functions', '*'],
  docsRoot: './docs',
  out: './docs/api',
  hidePageTitle: true,
  hideBreadcrumbs: true,
  hideGenerator: true,
  parametersFormat: 'table',
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  exclude: ['./src/_*.ts', './src/esToolkit.ts'],
}
