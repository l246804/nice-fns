import { resolve } from 'node:path'
import { cwd } from 'node:process'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'
import { batchUnset, eachTree } from './nice-fns'

const sidebar: DefaultTheme.SidebarItem[] = typedocSidebar
eachTree(
  sidebar,
  (node) => {
    if (!node.items) batchUnset(node, ['collapsed'])
  },
  { childrenKey: 'items' },
)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: resolve(cwd(), 'website'),
  base: '/nice-fns/',
  title: 'nice-fns',
  lang: 'zh-CN',
  description: '一个不错的现代 JS 函数库。',
  themeConfig: {
    logo: 'https://cn.vitejs.dev/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '函数', link: '/api/' },
      {
        text: '发行版本',
        link: 'https://github.com/l246804/nice-fns/blob/dev/CHANGELOG.md',
        target: '_blank',
      },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          {
            text: '安装',
            link: '/guide/installation',
          },
          {
            text: '快速开始',
            link: '/guide/quick-start',
          },
        ],
      },

      {
        text: '函数列表',
        items: sidebar,
        link: '/api/',
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/l246804/nice-fns' }],
  },
})
