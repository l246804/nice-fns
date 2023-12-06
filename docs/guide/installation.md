# 安装

## 环境支持

Nice Fns 可以在支持 ESNext 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill。

## 使用包管理器

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install nice-fns --save

# Yarn
$ yarn add nice-fns

# pnpm
$ pnpm install nice-fns
```

## 浏览器直接引入

直接通过浏览器的 Script 标签导入 Nice Fns，然后就可以使用全局变量 NiceFns 了。

根据不同的 CDN 提供商有不同的引入方式，我们在这里以 [unpkg](https://unpkg.com/) 举例。你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- Import Lodash -->
  <script src="//unpkg.com/lodash"></script>
  <!-- Import NiceFns -->
  <script src="//unpkg.com/nice-fns"></script>
</head>
```

> 建议使用 CDN 引入 NiceFns 的用户在链接地址上锁定版本，以免将来 Nice Fns 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
