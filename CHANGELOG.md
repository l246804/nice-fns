# Changelog

## [2.0.0](https://github.com/l246804/nice-fns/compare/v1.10.0...v2.0.0) (2025-03-20)


### Refactors

* **esToolkit:** 重构工具库并替换底层依赖 lodash 改为 es-toolkit ([decd6e4](https://github.com/l246804/nice-fns/commit/decd6e410befb51e015e1c2f618060d464ebc747))
* **types:** 将类型定义迁移到独立模块 ([b8904ca](https://github.com/l246804/nice-fns/commit/b8904ca5519a4519918f6eb6fbfd20a8e8bfa8a5))


### Docs

* **README:** 更新 v2.x 版本迁移指南 ([55c092c](https://github.com/l246804/nice-fns/commit/55c092ccfb2f89c11b85227c69834d5e9da36e3a))

## [1.10.0](https://github.com/l246804/nice-fns/compare/v1.9.0...v1.10.0) (2024-09-11)


### Features

* 🎸 getFullURL.defaultBase 支持回调方式 ([f619425](https://github.com/l246804/nice-fns/commit/f6194255a82d888fd70c564413940a36002c2fae))


### Chores

* 🤖 移除无效类型 ([e54c1ac](https://github.com/l246804/nice-fns/commit/e54c1acc20a5030c3b5f54b60414834e5779f7aa))

## [1.9.0](https://github.com/l246804/nice-fns/compare/v1.8.1...v1.9.0) (2024-08-16)


### Features

* 🎸 add callWithSignal ([61a792b](https://github.com/l246804/nice-fns/commit/61a792b162f9ee6ad6e727f1c67f841f8b63c8fb))
* 🎸 add createEventHook ([eae85a4](https://github.com/l246804/nice-fns/commit/eae85a40a29ea37c16ed023c73bb292849424b2f))
* 🎸 add isPromise, isPromiseLike ([d01e470](https://github.com/l246804/nice-fns/commit/d01e47071c293c18ddbeb9c4d27620770651aaa7))
* 🎸 add parallelCall ([d9db95b](https://github.com/l246804/nice-fns/commit/d9db95bae97dc55123573e7b669d279f3a4bb65c))
* 🎸 add serialCall ([270968f](https://github.com/l246804/nice-fns/commit/270968fbccef834d65252e4e0334543b899777bd))


### Chores

* 🤖 替换 createCallbacks() 为 createEventHook() ([8eb1ddc](https://github.com/l246804/nice-fns/commit/8eb1ddcc8c461740a2336fc209711873910cc68d))
* 🤖 完善 callWithSignal 单元测试 ([b5dcd10](https://github.com/l246804/nice-fns/commit/b5dcd109b903162869fa5c1d631955a6a0f8b4b8))
* 🤖 完善 parallelCall、serialCall 测试用例 ([83ac30c](https://github.com/l246804/nice-fns/commit/83ac30c2fd734ff1246cf0b6aab4401cead6cc3e))
* 🤖 优化 castError ([8ede79d](https://github.com/l246804/nice-fns/commit/8ede79de1e86bd030d151b594e436c8e0baf7bb3))
* 🤖 update deps ([c064aca](https://github.com/l246804/nice-fns/commit/c064acab765a858eada6dc00f5ce77996c152e34))

## [1.8.1](https://github.com/l246804/nice-fns/compare/v1.8.0...v1.8.1) (2024-07-26)


### Chores

* 🤖 parseContentDisposition 优化入参类型 ([6e6c74d](https://github.com/l246804/nice-fns/commit/6e6c74ddbcf507d18343aa54bf150699134c2d78))

## [1.8.0](https://github.com/l246804/nice-fns/compare/v1.7.4...v1.8.0) (2024-07-08)


### Features

* 🎸 add clientRun ([01341b0](https://github.com/l246804/nice-fns/commit/01341b00340d7ea79d2be288d9cc9f4472f51be3))


### Bug Fixes

* 🐛 修复 createScrollbarHelper 在 dpr 小于 1 时 addScroll 系列函数无效 ([96c9eb6](https://github.com/l246804/nice-fns/commit/96c9eb68d1f68717dac428782b1546a6097179cd))


### Chores

* 🤖 replace defaultWindow to clientRun ([a7b2edc](https://github.com/l246804/nice-fns/commit/a7b2edceeee50bfadef021feedf37b43173a9dc2))
* 🤖 scaleDom 支持获取元素的缩放比例 ([82efb01](https://github.com/l246804/nice-fns/commit/82efb01d37ed338bc875fc8fabc6615510707dc3))

## [1.7.5](https://github.com/l246804/nice-fns/compare/v1.7.4...v1.7.5) (2024-07-06)


### Bug Fixes

* 🐛 修复 createScrollbarHelper 在 dpr 小于 1 时 addScroll 系列函数无效 ([96c9eb6](https://github.com/l246804/nice-fns/commit/96c9eb68d1f68717dac428782b1546a6097179cd))


### Chores

* 🤖 scaleDom 支持获取元素的缩放比例 ([82efb01](https://github.com/l246804/nice-fns/commit/82efb01d37ed338bc875fc8fabc6615510707dc3))

## [1.7.4](https://github.com/l246804/nice-fns/compare/v1.7.3...v1.7.4) (2024-07-01)


### Bug Fixes

* 🐛 修复 createScrollbarHelper 的 isReach 系列函数计算误差 ([4f8601c](https://github.com/l246804/nice-fns/commit/4f8601cffe0844e88b417691db7bcb62079fb516))


### Chores

* 🤖 优化 findUpElement 类型声明 ([f46b860](https://github.com/l246804/nice-fns/commit/f46b86005d8d46f928cffb972efa13f0a1b0ba43))

## [1.7.3](https://github.com/l246804/nice-fns/compare/v1.7.2...v1.7.3) (2024-06-24)


### Chores

* 🤖 优化 createScrollbarHelper ([7b6aa8c](https://github.com/l246804/nice-fns/commit/7b6aa8cc513063df48086d54f6a01c39621fa0ac))

## [1.7.2](https://github.com/l246804/nice-fns/compare/v1.7.1...v1.7.2) (2024-06-24)


### Chores

* 🤖 修复示例注释 ([c2a1fb1](https://github.com/l246804/nice-fns/commit/c2a1fb1e6be2ee39ac8b50edf337e5b9f198f75d))
* 🤖 优化scaleDom ([abf092e](https://github.com/l246804/nice-fns/commit/abf092eec5682ee653e5ceaefe1133d147350fb0))

## [1.7.1](https://github.com/l246804/nice-fns/compare/v1.7.0...v1.7.1) (2024-06-24)


### Chores

* 🤖 优化 scaleDom 实现方式 ([1b07a61](https://github.com/l246804/nice-fns/commit/1b07a611335258483372cba216f016830925d56f))

## [1.7.0](https://github.com/l246804/nice-fns/compare/v1.6.1...v1.7.0) (2024-06-22)


### Features

* 🎸 scaleDom 支持还原 ([6521f44](https://github.com/l246804/nice-fns/commit/6521f4490f5fe2abca9468b916e3c68ffbab0140))


### Chores

* 🤖 优化 scaleDom 错误边界 ([175dd31](https://github.com/l246804/nice-fns/commit/175dd318a35fb70044ba7afae4500993406e5e1d))

## [1.6.2](https://github.com/l246804/nice-fns/compare/v1.6.1...v1.6.2) (2024-06-22)


### Chores

* 🤖 优化 scaleDom 错误边界 ([175dd31](https://github.com/l246804/nice-fns/commit/175dd318a35fb70044ba7afae4500993406e5e1d))

## [1.6.1](https://github.com/l246804/nice-fns/compare/v1.6.0...v1.6.1) (2024-06-22)


### Chores

* 🤖 优化 listenWindowResize ([11e2245](https://github.com/l246804/nice-fns/commit/11e2245aede10315faccbf077c0cfe4c42c35727))
* 🤖 优化 scaleDom 缩放逻辑 ([e2a7e28](https://github.com/l246804/nice-fns/commit/e2a7e2876b1cc6fdfc766bec351519d5778f0985))

## [1.6.0](https://github.com/l246804/nice-fns/compare/v1.5.5...v1.6.0) (2024-06-22)


### Features

* 🎸 add createScrollbarHelper ([1f8b795](https://github.com/l246804/nice-fns/commit/1f8b795c4a862d68f7aaea55f1d4a4f2931e62e4))
* 🎸 add listenWindowResize ([95bef5e](https://github.com/l246804/nice-fns/commit/95bef5ebc575a690a48ba070f02a85d8253ccf75))
* 🎸 add scaleDom ([84982db](https://github.com/l246804/nice-fns/commit/84982dbdc6bc7510e130f13b497710a6a1474c91))


### Chores

* 🤖 优化 createFlexible 功能 ([78c0cd1](https://github.com/l246804/nice-fns/commit/78c0cd1d6c541af4507618e1baaee6e49feea63b))

## [1.5.6](https://github.com/l246804/nice-fns/compare/v1.5.5...v1.5.6) (2024-06-11)


### Chores

* 🤖 优化 createFlexible 功能 ([78c0cd1](https://github.com/l246804/nice-fns/commit/78c0cd1d6c541af4507618e1baaee6e49feea63b))

## [1.5.5](https://github.com/l246804/nice-fns/compare/v1.5.4...v1.5.5) (2024-06-11)


### Chores

* 🤖 更改 createFlexible.bodyFontSize 默认值为 inherit ([5cb639d](https://github.com/l246804/nice-fns/commit/5cb639dcddb62d576ae24baf0ec2097e261f06fb))
* 🤖 更改部署脚本 ([a67b777](https://github.com/l246804/nice-fns/commit/a67b777bdbff5b6dd6ba4c642993f1b6f777c210))

## [1.5.4](https://github.com/l246804/nice-fns/compare/v1.5.2...v1.5.4) (2024-06-05)


### Bug Fixes

* 🐛 修复部署脚本 403 权限问题 ([596bf01](https://github.com/l246804/nice-fns/commit/596bf01e2f0074acd66223bf4ae9c0c7ae8602dd))


### Chores

* 🤖 更改文档部署方式 ([a673ac1](https://github.com/l246804/nice-fns/commit/a673ac11f47275d318705f87c824c363f102c26a))
* 🤖 修改部署脚本 ([e8ed0c9](https://github.com/l246804/nice-fns/commit/e8ed0c9c682b8a0662c9afbd51bdacd44f764f26))
* 🤖 优化函数类型 ([e0c2620](https://github.com/l246804/nice-fns/commit/e0c262052802f1bc71a2ab206c91e1c8697ae1b4))
* 🤖 update homepage ([c4ef851](https://github.com/l246804/nice-fns/commit/c4ef85151b1f1dafe8c781cbd472cbd0ef8224a9))

## [1.5.3](https://github.com/l246804/nice-fns/compare/v1.5.2...v1.5.3) (2024-06-05)


### Chores

* 🤖 优化函数类型 ([e0c2620](https://github.com/l246804/nice-fns/commit/e0c262052802f1bc71a2ab206c91e1c8697ae1b4))

## [1.5.2](https://github.com/l246804/nice-fns/compare/v1.5.0...v1.5.2) (2024-05-22)


### Chores

* 🤖 更改 createFlexible.rootFontSize 默认值 ([0dbcfd9](https://github.com/l246804/nice-fns/commit/0dbcfd99cae9399e4f5c8e2a6c90d1dd7e0c8bc4))
* 🤖 优化 createFlexible.rootFontSize 配置 ([0cac62b](https://github.com/l246804/nice-fns/commit/0cac62bf5aa5221f25acb929dc2f3b223d707bde))

## [1.5.1](https://github.com/l246804/nice-fns/compare/v1.5.0...v1.5.1) (2024-05-22)


### Chores

* 🤖 优化 createFlexible.rootFontSize 配置 ([0cac62b](https://github.com/l246804/nice-fns/commit/0cac62bf5aa5221f25acb929dc2f3b223d707bde))

## [1.5.0](https://github.com/l246804/nice-fns/compare/v1.4.2...v1.5.0) (2024-05-22)


### Features

* 🎸 add createFlexible、getDpr、detectHalfPX ([ae33c25](https://github.com/l246804/nice-fns/commit/ae33c256a2e071169f7b69b56998814671b662d4))

## [1.4.2](https://github.com/l246804/nice-fns/compare/v1.4.1...v1.4.2) (2024-05-08)


### Chores

* 🤖 优化 toArrayTree 类型 ([478971b](https://github.com/l246804/nice-fns/commit/478971b93a4a880cc3458ef6899d0dcc21a48931))

## [1.4.1](https://github.com/l246804/nice-fns/compare/v1.2.2...v1.4.1) (2024-04-24)


### Features

* 🎸 add flattenPaths ([cb7e36b](https://github.com/l246804/nice-fns/commit/cb7e36b49145a268595534e2ec622df09991e9b5))
* 🎸 toArrayTree 支持仅移除空子级属性功能 ([7721921](https://github.com/l246804/nice-fns/commit/7721921f9c4212fa855682efb61e2b9684662cf9))


### Bug Fixes

* 🐛 修复 flattenPaths 错误引用 lodash ([2adc9a1](https://github.com/l246804/nice-fns/commit/2adc9a139429c4cffb8d64a98c1fbfbc61fb931f))

## [1.4.0](https://github.com/l246804/nice-fns/compare/v1.2.2...v1.4.0) (2024-04-24)


### Features

* 🎸 add flattenPaths ([cb7e36b](https://github.com/l246804/nice-fns/commit/cb7e36b49145a268595534e2ec622df09991e9b5))
* 🎸 toArrayTree 支持仅移除空子级属性功能 ([7721921](https://github.com/l246804/nice-fns/commit/7721921f9c4212fa855682efb61e2b9684662cf9))

## [1.3.0](https://github.com/l246804/nice-fns/compare/v1.2.2...v1.3.0) (2024-04-23)


### Features

* 🎸 toArrayTree 支持仅移除空子级属性功能 ([7721921](https://github.com/l246804/nice-fns/commit/7721921f9c4212fa855682efb61e2b9684662cf9))

## [1.2.2](https://github.com/l246804/nice-fns/compare/v1.1.0...v1.2.2) (2024-04-16)


### Features

* 🎸 add baseAssign ([8a5d814](https://github.com/l246804/nice-fns/commit/8a5d814a2659e0822ec121820678060867c00f11))
* 🎸 add findUpElement ([7cfd7c8](https://github.com/l246804/nice-fns/commit/7cfd7c890ab2c72e1fd53374b2cb9a6bd36e863f))
* 🎸 add fromEntries ([d4e111a](https://github.com/l246804/nice-fns/commit/d4e111ae569ab05ee532b7c1245caac8a8963bce))
* 🎸 add toEntries ([fb94234](https://github.com/l246804/nice-fns/commit/fb94234603f11fc5d38607d1bea0dd5c0a413b0c))


### Chores

* 🤖 格式化代码 ([d484a6f](https://github.com/l246804/nice-fns/commit/d484a6f9c68c53ce3bfe92ab76e42e42c0352f09))
* 🤖 优化 toDictionary 内置函数类型 ([da07143](https://github.com/l246804/nice-fns/commit/da0714332c468842193ee8ace684e70fa66cb428))
* 🤖 优化 useDictionary 类型 ([9285508](https://github.com/l246804/nice-fns/commit/9285508741dad1b318bf8ff41917cd3154d7e0b7))

## [1.2.1](https://github.com/l246804/nice-fns/compare/v1.1.0...v1.2.1) (2024-04-15)


### Features

* 🎸 add baseAssign ([8a5d814](https://github.com/l246804/nice-fns/commit/8a5d814a2659e0822ec121820678060867c00f11))
* 🎸 add findUpElement ([7cfd7c8](https://github.com/l246804/nice-fns/commit/7cfd7c890ab2c72e1fd53374b2cb9a6bd36e863f))
* 🎸 add fromEntries ([d4e111a](https://github.com/l246804/nice-fns/commit/d4e111ae569ab05ee532b7c1245caac8a8963bce))
* 🎸 add toEntries ([fb94234](https://github.com/l246804/nice-fns/commit/fb94234603f11fc5d38607d1bea0dd5c0a413b0c))


### Chores

* 🤖 格式化代码 ([d484a6f](https://github.com/l246804/nice-fns/commit/d484a6f9c68c53ce3bfe92ab76e42e42c0352f09))
* 🤖 优化 toDictionary 内置函数类型 ([da07143](https://github.com/l246804/nice-fns/commit/da0714332c468842193ee8ace684e70fa66cb428))

## [1.2.0](https://github.com/l246804/nice-fns/compare/v1.1.0...v1.2.0) (2024-04-02)


### Features

* 🎸 add baseAssign ([8a5d814](https://github.com/l246804/nice-fns/commit/8a5d814a2659e0822ec121820678060867c00f11))
* 🎸 add findUpElement ([7cfd7c8](https://github.com/l246804/nice-fns/commit/7cfd7c890ab2c72e1fd53374b2cb9a6bd36e863f))
* 🎸 add fromEntries ([d4e111a](https://github.com/l246804/nice-fns/commit/d4e111ae569ab05ee532b7c1245caac8a8963bce))
* 🎸 add toEntries ([fb94234](https://github.com/l246804/nice-fns/commit/fb94234603f11fc5d38607d1bea0dd5c0a413b0c))


### Chores

* 🤖 格式化代码 ([d484a6f](https://github.com/l246804/nice-fns/commit/d484a6f9c68c53ce3bfe92ab76e42e42c0352f09))

## [1.1.0](https://github.com/l246804/nice-fns/compare/v1.0.2...v1.1.0) (2024-03-21)


### Features

* 🎸 timerWithControl support cleanup callback ([96b5039](https://github.com/l246804/nice-fns/commit/96b503966f890ae18451c25b0f1d1aa99658f73f))

## [1.0.2](https://github.com/l246804/nice-fns/compare/v1.0.1...v1.0.2) (2024-03-08)


### Chores

* 🤖 优化 parseContentDisposition 正则 ([4adc1cd](https://github.com/l246804/nice-fns/commit/4adc1cd73fc285b8589c722061a9c6ede1e7f6d2))

## [1.0.1](https://github.com/l246804/nice-fns/compare/v1.0.0-1...v1.0.1) (2024-03-07)


### Chores

* 🤖 优化 Dictionary 类型 ([6fbc593](https://github.com/l246804/nice-fns/commit/6fbc593ab4cdecc9047b138f942e9684b1d56a12))

## [1.0.0](https://github.com/l246804/nice-fns/compare/v1.0.0-1...v1.0.0) (2024-03-01)

## [1.0.0-1](https://github.com/l246804/nice-fns/compare/v0.5.1...v1.0.0-1) (2024-02-07)


### Chores

* 🤖 rename extname to extName ([c6cc10f](https://github.com/l246804/nice-fns/commit/c6cc10f95a4cf06a1234754f379cdce49c30b59e))


### Refactors

* 💡 重构函数类型和实现 ([1db1147](https://github.com/l246804/nice-fns/commit/1db11479da0d160acc2364c91ab4960a0629bd1b))

## [1.0.0-0](https://github.com/l246804/nice-fns/compare/v0.5.1...v1.0.0-0) (2024-02-07)


### Refactors

* 💡 重构函数类型和实现 ([1db1147](https://github.com/l246804/nice-fns/commit/1db11479da0d160acc2364c91ab4960a0629bd1b))

## [0.5.1](https://github.com/l246804/nice-fns/compare/v0.5.0...v0.5.1) (2023-12-29)


### Chores

* 🤖 使用 ES6 已支持函数替换 lodash 函数 ([524df72](https://github.com/l246804/nice-fns/commit/524df72bebf72aa9d4f9f45f373b30fddd02e732))
* 🤖 优化发布脚本 ([afb4f3e](https://github.com/l246804/nice-fns/commit/afb4f3e5d266b09cdc357318d7576ee3f121d96f))

## [0.5.0](https://github.com/l246804/nice-fns/compare/v0.4.2...v0.5.0) (2023-12-29)


### Features

* 🎸 添加工具函数 arrayToMap ([bc30add](https://github.com/l246804/nice-fns/commit/bc30add2d0d56a2a0911e32a8ba6674b4b2e5e1e))
* 🎸 toDictionary 新增 getKey、getKeyByValue 方法 ([f1b69e0](https://github.com/l246804/nice-fns/commit/f1b69e09727411ba2b753007fd88bd6fe47f449d))

## [0.4.2](https://github.com/l246804/nice-fns/compare/v0.4.1...v0.4.2) (2023-12-26)


### Bug Fixes

* 🐛 修复 toDictionary 部分函数返回类型 ([e84c98e](https://github.com/l246804/nice-fns/commit/e84c98eb5f048b5a133562bf4289eb3c66863ee0))


### Chores

* 🤖 发布前增加类型校验 ([0b3cb96](https://github.com/l246804/nice-fns/commit/0b3cb9613967ca4e22b590da3752792efd526c13))

## [0.4.1](https://github.com/l246804/nice-fns/compare/v0.4.0...v0.4.1) (2023-12-24)


### Features

* 🎸 parseJSON 支持 onNil 直接设置默认值 ([d6dd335](https://github.com/l246804/nice-fns/commit/d6dd3352194fde0488404e032dd02542f3f0f369))

## [0.4.0](https://github.com/l246804/nice-fns/compare/v0.2.2...v0.4.0) (2023-12-19)


### Features

* 🎸 添加工具函数 createLogger ([f877b1b](https://github.com/l246804/nice-fns/commit/f877b1becf1bf93bf7623476f0fefc4a9821d844))
* 🎸 createLogger 新增 format 函数 ([e7d0b79](https://github.com/l246804/nice-fns/commit/e7d0b79a92c162af9d1b8f2f0fa7ca13f2531753))

## [0.3.0](https://github.com/l246804/nice-fns/compare/v0.2.2...v0.3.0) (2023-12-19)


### Features

* 🎸 添加工具函数 createLogger ([f877b1b](https://github.com/l246804/nice-fns/commit/f877b1becf1bf93bf7623476f0fefc4a9821d844))

## [0.2.2](https://github.com/l246804/nice-fns/compare/v0.2.0...v0.2.2) (2023-12-19)


### Chores

* 🤖 优化 classState 和 toDictionary 类型 ([a15cad7](https://github.com/l246804/nice-fns/commit/a15cad70c3de8d32d9b6c37375c0b70c3b3ec2b6))
* 🤖 优化函数类型 ([40a2e3e](https://github.com/l246804/nice-fns/commit/40a2e3e08167ed35e44aa9c9e6635f985cdbc6d1))

## [0.2.1](https://github.com/l246804/nice-fns/compare/v0.2.0...v0.2.1) (2023-12-18)


### Chores

* 🤖 优化函数类型 ([40a2e3e](https://github.com/l246804/nice-fns/commit/40a2e3e08167ed35e44aa9c9e6635f985cdbc6d1))

## [0.2.0](https://github.com/l246804/nice-fns/compare/v0.1.2...v0.2.0) (2023-12-18)


### Chores

* 🤖 简化树结构转换和字典转换函数类型 ([a1fe20b](https://github.com/l246804/nice-fns/commit/a1fe20b62eb294854c47c1f2f5db0e00b8f6f0bc))
* 🤖 移除部分函数默认配置 ([6ba87eb](https://github.com/l246804/nice-fns/commit/6ba87eb5eaed6d05244d581f7d5f6466094be511))
* 🤖 优化函数类型 ([d16866a](https://github.com/l246804/nice-fns/commit/d16866a20be3754f3c0ea9e1c433f1cb3905655e))
* 🤖 优化树结构转换函数类型 ([8c781fc](https://github.com/l246804/nice-fns/commit/8c781fc3257b0e724f0e0dbac361d7586dacb9cb))

## [0.1.2](https://github.com/l246804/nice-fns/compare/v0.1.1...v0.1.2) (2023-12-14)


### Chores

* 🤖 优化树结构数据转换类型 ([74bc11a](https://github.com/l246804/nice-fns/commit/74bc11aef7df0f53f3c30c700e9ab7db6683cc5b))

## [0.1.1](https://github.com/l246804/nice-fns/compare/v0.1.0...v0.1.1) (2023-12-13)


### Bug Fixes

* 🐛 修复 toDictionary 导出函数名错误 ([cd0fb93](https://github.com/l246804/nice-fns/commit/cd0fb93b148953eff0cafa6d506ae59ef78d3c10))

## [0.1.0](https://github.com/l246804/nice-fns/compare/v0.1.0-1...v0.1.0) (2023-12-13)


### Features

* 🎸 添加工具函数 classState ([738e501](https://github.com/l246804/nice-fns/commit/738e5010e3da86e83954de5048ac31d0efea5b20))
* 🎸 添加工具函数 createDictionary、arrayToDictionary ([3285ceb](https://github.com/l246804/nice-fns/commit/3285cebe4e81693dd98e15ab8ddf15e63781256b))
* 🎸 添加工具函数 cssVar、cssVarName ([60e12b4](https://github.com/l246804/nice-fns/commit/60e12b4a5d009095f8ba25b90989d2dbc30d79f3))
* 🎸 添加工具函数 getExtnameByFileType、getFileTypeByExtname ([d03706e](https://github.com/l246804/nice-fns/commit/d03706ebe8f578189b3be30096ca5616a19d7855))
* 🎸 添加工具函数 getRootFontSize、getScrollParent ([814baa0](https://github.com/l246804/nice-fns/commit/814baa0e98e5e7e2dc429e2563725d8b4b5cc332))
* 🎸 添加工具函数 getWindowSize、scalePx ([5224d6c](https://github.com/l246804/nice-fns/commit/5224d6c17c8553e676dffaf9ad0a7f3028fbe658))
* 🎸 添加工具函数 parseContentDisposition ([84fd653](https://github.com/l246804/nice-fns/commit/84fd653f577f0064db6cd04a7f71680061aefd09))
* 🎸 添加工具函数 pxToRem、pxToViewport ([93eebfe](https://github.com/l246804/nice-fns/commit/93eebfe520c8d46e5a8c9e7a0b25b7653f117ebc))
* 🎸 添加工具函数 unitToPx、saveAs ([4b5072f](https://github.com/l246804/nice-fns/commit/4b5072f3a43e0c6f3704f98e4654d87ad33bf3ee))


### Chores

* 🤖 补充 createDictionary、arrayToDictionary 内置方法 ([3db8a2a](https://github.com/l246804/nice-fns/commit/3db8a2abb832e0693ab1fc518c507644d9b98fc1))
* 🤖 更改 unbuild 配置 ([16c10e8](https://github.com/l246804/nice-fns/commit/16c10e88ea6c3b8e5f880e271994f3c9fde54d14))
* 🤖 优化 package.json 的 exports 配置 ([cd1836b](https://github.com/l246804/nice-fns/commit/cd1836be3829112da39070edfc031ac7254e7fa5))
* 🤖 重命名 `objectCompact` 为 `compactObject` ([8d8b795](https://github.com/l246804/nice-fns/commit/8d8b795ee180cace738063346a933897c030d964))


### Refactors

* 💡 重构 createDictionary 和 arrayToDictionary 为 toDictionary ([1e909ce](https://github.com/l246804/nice-fns/commit/1e909ce4e9ff684e4045873403e27a562d74f5af))
* 💡 重构 saveAs，摆脱 file-saver 依赖 ([5d8d330](https://github.com/l246804/nice-fns/commit/5d8d330fa1a3dd78950d3eaffc3557c47085f89a))

## [0.1.0-3](https://github.com/l246804/nice-fns/compare/v0.1.0-1...v0.1.0-3) (2023-12-08)


### Features

* 🎸 添加工具函数 cssVar、cssVarName ([60e12b4](https://github.com/l246804/nice-fns/commit/60e12b4a5d009095f8ba25b90989d2dbc30d79f3))
* 🎸 添加工具函数 getExtnameByFileType、getFileTypeByExtname ([d03706e](https://github.com/l246804/nice-fns/commit/d03706ebe8f578189b3be30096ca5616a19d7855))
* 🎸 添加工具函数 getRootFontSize、getScrollParent ([814baa0](https://github.com/l246804/nice-fns/commit/814baa0e98e5e7e2dc429e2563725d8b4b5cc332))
* 🎸 添加工具函数 getWindowSize、scalePx ([5224d6c](https://github.com/l246804/nice-fns/commit/5224d6c17c8553e676dffaf9ad0a7f3028fbe658))
* 🎸 添加工具函数 parseContentDisposition ([84fd653](https://github.com/l246804/nice-fns/commit/84fd653f577f0064db6cd04a7f71680061aefd09))
* 🎸 添加工具函数 pxToRem、pxToViewport ([93eebfe](https://github.com/l246804/nice-fns/commit/93eebfe520c8d46e5a8c9e7a0b25b7653f117ebc))
* 🎸 添加工具函数 unitToPx、saveAs ([4b5072f](https://github.com/l246804/nice-fns/commit/4b5072f3a43e0c6f3704f98e4654d87ad33bf3ee))


### Refactors

* 💡 重构 saveAs，摆脱 file-saver 依赖 ([5d8d330](https://github.com/l246804/nice-fns/commit/5d8d330fa1a3dd78950d3eaffc3557c47085f89a))

## [0.1.0-2](https://github.com/l246804/nice-fns/compare/v0.1.0-1...v0.1.0-2) (2023-12-08)


### Features

* 🎸 添加工具函数 cssVar、cssVarName ([60e12b4](https://github.com/l246804/nice-fns/commit/60e12b4a5d009095f8ba25b90989d2dbc30d79f3))
* 🎸 添加工具函数 getExtnameByFileType、getFileTypeByExtname ([d03706e](https://github.com/l246804/nice-fns/commit/d03706ebe8f578189b3be30096ca5616a19d7855))
* 🎸 添加工具函数 getRootFontSize、getScrollParent ([814baa0](https://github.com/l246804/nice-fns/commit/814baa0e98e5e7e2dc429e2563725d8b4b5cc332))
* 🎸 添加工具函数 getWindowSize、scalePx ([5224d6c](https://github.com/l246804/nice-fns/commit/5224d6c17c8553e676dffaf9ad0a7f3028fbe658))
* 🎸 添加工具函数 parseContentDisposition ([84fd653](https://github.com/l246804/nice-fns/commit/84fd653f577f0064db6cd04a7f71680061aefd09))
* 🎸 添加工具函数 pxToRem、pxToViewport ([93eebfe](https://github.com/l246804/nice-fns/commit/93eebfe520c8d46e5a8c9e7a0b25b7653f117ebc))
* 🎸 添加工具函数 unitToPx、saveAs ([4b5072f](https://github.com/l246804/nice-fns/commit/4b5072f3a43e0c6f3704f98e4654d87ad33bf3ee))

## [0.1.0-1](https://github.com/l246804/nice-fns/compare/v0.1.0-0...v0.1.0-1) (2023-12-07)


### Features

* 🎸 添加工具函数 createBEM ([9bff803](https://github.com/l246804/nice-fns/commit/9bff80334935c99b7a65e6cf51215387ae4a6670))


### Chores

* 🤖 优化 release-it 配置 ([c353f01](https://github.com/l246804/nice-fns/commit/c353f019b652d31ab8892f3122beb0e019deedbd))


### Docs

* ✏️ 更新文档 ([a067da8](https://github.com/l246804/nice-fns/commit/a067da8cbdebddf89d1eda29faab6e6d75f8e483))

## 0.1.0-0 (2023-12-07)


### Features

* 🎸 初始化项目 ([4f74b4f](https://github.com/l246804/nice-fns/commit/4f74b4f56c75fb4e23eceaea2d09459a5892cc99))
* 🎸 开发工具函数并添加测试用例 ([9bb677a](https://github.com/l246804/nice-fns/commit/9bb677a68342a6c32fcc850b2902b8e468b74ae6))
* 🎸 添加工具函数 ([c28561e](https://github.com/l246804/nice-fns/commit/c28561e2584433ab068e73f3b1a3d873443db425))
* 🎸 添加工具函数 addUnit、isNumeric ([38993a4](https://github.com/l246804/nice-fns/commit/38993a44e76dc3bed70abfdb8b123b11e7fd887b))
* 🎸 添加网站文档 ([b3ae28c](https://github.com/l246804/nice-fns/commit/b3ae28cc875825aed868957e6a96b8d0fed922eb))


### Chores

* 🤖 优化代码注释 ([ad292f4](https://github.com/l246804/nice-fns/commit/ad292f402ca8166f704e4c8d8376de9fb2886e10))