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
```
  git clone git@github.com:ZYCHOOO/vue3-h5-template.git

  cd vue-h5-template

  npm install

  npm run serve
```

### 环境变量配置
`package.json` 里的 `scripts` 配置 `serve` `stage` `build`，通过 `--mode xxx` 来执行不同环境

- 通过`npm run test`执行`vue-cli-service serve --mode test`
- 通过`npm run build`执行`vue-cli-service build`
- 通过`npm run build:test`打包测试，执行`vue-cli-service build --mode test`
- 通过`npm run build:stage`打包预发布，执行`vue-cli-service build --mode stage`
- 通过`npm run build:prod`打包发布，执行`vue-cli-service build --mode production`

```
  ...
  "scripts": {
    "serve": "vue-cli-service serve",
    "test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "build:test": "vue-cli-service build --mode test",
    "build:stage": "vue-cli-service build --mode stage",
    "build:prod": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint"
  },
  ...
```

#### 环境变量
1. 在`.env.xxx`文件中，变量命名必须要以`VUE_APP_`开头
2. 在`environment.js`文件中，

- 获取变量名的两种方式
```
import { getEnvVariables, getEnvValue } from '@/utils/environment'

setup () {
  console.log(getEnvValue('VUE_APP_ENV'))
  console.log(getEnvVariables('APP_ID'))
}

```

- 关于getEnvVariables方法
在environment.js文件中集中管理了环境变量，这样的好处是可以一目了然各个环境下的变量，而且改动后可以立即生效，不用重新运行项目才获取到


