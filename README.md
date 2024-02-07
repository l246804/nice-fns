# nice-fns

一个基于 TypeScript 和 Lodash 开发的现代 JS 函数库。

[文档地址](http://rootwater.gitee.io/nice-fns/)

## 安装方式

```shell
# npm
npm i nice-fns

# yarn or pnpm
pnpm add nice-fns
```

## 使用方式

```ts
import { pascalCase } from 'nice-fns'

pascalCase('test string')
// => 'TestString'
```

## 迁移至 v1.x

1. `arrayToMap` 移除 `filter` 配置项，对象数组转换时依据改为 `primaryKey` 不为空值。
2. `createBEM` 修复 `namespace` 为函数变更时不会变换结果中的 `namespace`。
3. `createCallbacks` 移除配置项和单一执行方式，回调句柄将保持唯一性，`runAll` 变更为 `run`。
4. 部分函数返回中的 `null` 变更为 `undefined`。
5. `Extname` 更名为 `ExtName`，相关文件名和变量名已变更。
6. `tree` 相关函数类型重构。
7. `toDictionary` 将 `size` 函数变更为 `size` 属性，类型重构。 
