# vue3-h5-template

基于Vue3 + Vue-Cli4 + Vant-ui + sass + axios封装的移动端模版

* 项目地址：[github](https://github.com/ZYCHOOO/vue3-h5-template)

### 项目结构
```
vue-h5-template
├─ public --------------- 静态资源
│  ├─ favicon.ico --------- 图标 
│  └─ index.html ---------- 首页
├─ src ------------------ 源码目录
│  ├─ api	----------------- 接口目录，与后端对接       
│  ├─ assets -------------- UI资源
│  ├─ components ---------- 公共组件
│  ├─ hooks	--------------- vue3-hooks
│  ├─ router -------------- vue-router 路由，分模块加目录引入到index.js
│     ├─ index.js ----------- 路由注册
│     └─ permission.js ------ 路由全局守卫
│  ├─ store --------------- vuex
│  ├─ styles -------------- 项目样式
│     ├─ components	--------- 组件样式
│     ├─ views -------------- 页面样式      
│     ├─ base.scss ---------- html样式
│     ├─ iconfont.css	------- 字体图标CSS
│     ├─ index.css ---------- 全局通用样式
│     ├─ mixins.css	--------- 全局mixins样式
│     └─ variables.css ------ css变量
│  ├─ utils --------------- 工具类
│     ├─ enums.js	----------- 枚举值
│     ├─ environment.js	----- 环境变量及方法
│     ├─ request.js	--------- axios 封装
│     └─ storage.js	--------- 本地存储封装
│  ├─ views	--------------- 页面
│  ├─ App.vue	------------- 入口vue
│  ├─ main.js	------------- 入口main.js
│  ├─ .env.development ---- 开发环境
│  ├─ .env.test	----------- 测试环境
│  ├─ .env.stage ---------- 预发布环境
│  ├─ .env.production	----- 发布环境
│  ├─ .eslintrc.js -------- eslint 配置
│  ├─ .gitignore ---------- git 忽略配置
│  ├─ .babel.config.js ---- babel 配置
│  └─ package.json -------- 依赖管理
```

### 项目启动
```bash
  git clone git@github.com:ZYCHOOO/vue3-h5-template.git

  cd vue-h5-template

  npm install

  npm run serve
```

## <span id="catalogue">目录</span>
* [环境变量配置](#env)
* [eruda移动端调试](#eruda)
* [去除console.log](#console)
* [rem适配](#rem)
* [全局sass样式](#sass)
* [BEM命名规范](#bem)
* [样式穿透](#deep)


### <span id="env">环境变量配置</span>
`package.json` 里的 `scripts` 配置 `serve` `stage` `build`，通过 `--mode xxx` 来执行不同环境

- 通过`npm run test`执行`vue-cli-service serve --mode test`
- 通过`npm run build`执行`vue-cli-service build`
- 通过`npm run build:test`打包测试，执行`vue-cli-service build --mode test`
- 通过`npm run build:stage`打包预发布，执行`vue-cli-service build --mode stage`
- 通过`npm run build:prod`打包发布，执行`vue-cli-service build --mode production`

```javascript
  "scripts": {
    "serve": "vue-cli-service serve",
    "test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "build:test": "vue-cli-service build --mode test",
    "build:stage": "vue-cli-service build --mode stage",
    "build:prod": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint"
  },
```

#### 环境变量
1. 在`.env.xxx`文件中，变量命名必须要以`VUE_APP_`开头
2. 在`environment.js`文件中，

- 获取变量名的两种方式
```javascript
import { getEnvVariables, getEnvValue } from '@/utils/environment'

setup () {
  console.log(getEnvValue('VUE_APP_ENV'))
  console.log(getEnvVariables('APP_ID'))
}

```

- 关于getEnvVariables方法
在environment.js文件中集中管理了环境变量，这样的好处是可以一目了然各个环境下的变量，而且改动后可以立即生效，不用重新运行项目才获取到

[🔙返回顶部](#catalogue)


### <span id="eruda">eruda移动端调试</span>
在开发环境和测试环境中显示eruda调试工具
```
  npm install eruda

  eruda.init()
```
若要在其他自定义环境中显示eruda调试工具，在`enums.js`的`DEBUG_WHITE_LIST`白名单中修改配置即可

[🔙返回顶部](#catalogue)


### <span id="console">去除console.log</span>
```bash
  npm i -D babel-plugin-transform-remove-console
```
在开发环境和测试环境中保留console.log输出，`babel.config.js`中配置如下
```javascript
  const plugins = []
  const DEBUG_WHITE_LIST = ['development', 'test']
  const IS_DEBUG = DEBUG_WHITE_LIST.includes(process.env.VUE_APP_ENV)

  // 非调试环境，去除代码中的所有console.log(development-env, test-env)
  if (!IS_DEBUG) {
    plugins.push('transform-remove-console')
  }

  module.exports = {
    plugins
  }
```

[🔙返回顶部](#catalogue)


### <span id="rem">rem适配</span>

[🔙返回顶部](#catalogue)


### <span id="scss">scss全局样式</span>
vue的思想就是组件化，在每个`.vue`页面的样式要想独立开来，可以添加scoped属性，使当前样式只能在当前vue文件中生效，使各个组件的样式互不污染。
```css
  <style lang="scss">
    /** global style */
  </style>
  <style lang="scss" scoped>
    /** local style */
  </style>
```

#### 目录结构
vue3-h5-template所有全局样式都在`@/styles`目录下设置

```
│  ├─ styles ---------------- 项目样式
│     ├─ components	--------- 组件样式
│     ├─ views -------------- 页面样式      
│     ├─ base.scss ---------- html样式
│     ├─ iconfont.css	------- 字体图标CSS
│     ├─ index.css ---------- 全局通用样式
│     ├─ mixins.css	--------- 全局mixins样式
│     └─ variables.css ------ css变量
```

`vue.config.js`添加全局样式配置
```javascript
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        prependData: `
          @import "~@/style/mixins.scss";
          @import "~@/style/variables.scss";
        `
      }
    }
  },
```

#### 全局mixins样式
在`mixins.scss`中写好了常用的样式，如flex布局的上下左右居中，超出宽度省略等
```css
  @mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin flex-align-center {
    display: flex;
    align-items: center;
  }

  @mixin flex-justify-center {
    display: flex;
    justify-content: center;
  }

  @mixin ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @mixin multiline-ellipsis($lineNum) {
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: $lineNum;
    -webkit-box-orient: vertical;
  }
```

[🔙返回顶部](#catalogue)


### <span id="bem">BEM命名规范</span>
该项目使用BEM命名方法，由块（Block）元素（Element）修饰符（Modifier）组成，具有可读性且方便维护。
```css
  <!-- good -->
  <div class="header__btn--success" />
  <!-- bad -->
  <div class="header-btn-success" />
```

[🔙返回顶部](#catalogue)


### <span id="deep">样式穿透</span>
当你子组件使用了 `scoped` 但在父组件又想修改子组件的样式可以 通过 `:deep` 来实现
```css
  :deep .btn {
    background: lightskyblue;
  }
```

[🔙返回顶部](#catalogue)

