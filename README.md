# nice-fns

一个基于 TypeScript 和 ESToolkit 开发的现代 JS 函数库。

[文档地址](https://l246804.github.io/nice-fns/)

## 安装方式

```shell
# npm
npm i nice-fns

# yarn or pnpm
pnpm add nice-fns
```

## 使用方式

```ts
import { addUnit } from 'nice-fns'

addUnit('10')
// => '10px'
```

## 迁移至 v2.1

- 删除部分函数全局配置以保证应用侧捆绑器能够正常 treeshaking
  + addUnit.defaultUnit
  + classState.is
  + clientRun.resolveProfile -> resolveClientRunProfile
  + clientRun.defaults
  + createScrollbarHelper.getScrollLeft -> getScrollLeft，其他函数类似
  + scaleDom.getScale -> getScaled
  + scaleDom.revert -> revertScaled
  + toDictionary.builtinMethods
- es-toolkit 兼容层改为由 nice-fns/compat 提供

## 迁移至 v2.x

- 替换 lodash 为 es-toolkit
- 移除废弃的函数参数
- createLogger 支持子模块功能
- toDictionary 移除内部函数排序支持
- 重命名 toValue 为 resolveValue
- 删除了部分函数
  - baseAssign
  - createCallbacks
  - fromEntries
  - toEntries
  - protoOf
- es-toolkit 不支持 lodash 的函数

## 迁移至 v1.x

1. `arrayToMap` 移除 `filter` 配置项，对象数组转换时依据改为 `primaryKey` 不为空值。
2. `createBEM` 修复 `namespace` 为函数变更时不会变换结果中的 `namespace`。
3. `createCallbacks` 移除配置项和单一执行方式，回调句柄将保持唯一性，`runAll` 变更为 `run`。
4. 部分函数返回中的 `null` 变更为 `undefined`。
5. `Extname` 更名为 `ExtName`，相关文件名和变量名已变更。
6. `tree` 相关函数类型重构。
7. `toDictionary` 将 `size` 函数变更为 `size` 属性，类型重构。
