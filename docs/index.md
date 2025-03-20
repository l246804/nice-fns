---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Nice Fns"
  text: "一个现代 JS 函数库。"
  image:
    src: https://cn.vitejs.dev/logo-with-shadow.png
    alt: Nice Fns
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/installation
    - theme: alt
      text: 函数列表
      link: /api/
features:
  - icon: 🎯
    title: 稳定智能
    details: 基于 TypeScript 和 ESToolkit 开发构建，提供完整的类型系统。
  - icon: 🧩
    title: 按需加载
    details: 支持 ESModule 格式，配合 Bundler 树摇让包体积更小。
  - icon: 🔐
    title: 安全可靠
    details: 基于 Vitest 提供完善的单测用例，更安全，更可靠。
  - icon: 🔋
    title: 支持 Node
    details: 提供兼容性代码，更好的支持浏览器与 Node 环境开发。
---
