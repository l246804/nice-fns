# 快速开始

本节将介绍如何在项目中使用 Nice Fns。

## 用法

Nice Fns 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```ts
import { camelCase } from 'nice-fns'

camelCase('test string')
// => TestString
```

## 默认配置

部分函数提供了默认配置选项，方便为不同场景开发时提供便利。

### 树结构配置

```ts
import { treeDefaults } from 'nice-fns'

treeDefaults.key = 'id'
treeDefaults.parentKey = 'parentId'
```

### 函数配置

```ts
import { getFullURL, parseJSON } from 'nice-fns'

getFullURL.defaultBase = '/'

parseJSON.defaults.onNil = (_, value) => {
  return value
}
```

## 开始使用

现在你可以启动项目了。对于每个函数的用法，请查阅对应的[独立文档](/api/)。
