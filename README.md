# vue3-h5-template
基于vue3的h5移动端代码模版

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 主要使用的包（已使用）
### 1、vue3
### 2、axios：http请求
### 3、sass：样式
### 4、vue-router：路由
### 6、vant：ui库

## 代码src目录说明
```
│  App.vue									// 入口vue
│  main.js									// 入口main.js					
├─api												// 接口目录，与后端对接       
├─assets										// 项目中UI资源
├─components								// 项目中公共组件
├─mixins									  // mixins混合使用
├─utils											// 工具类
├─router							      // 路由目录，分模块加目录引入到index.js
│  ├─index.js                 // 路由注册
│  └─permission.js						// 路由全局守卫
├─styles										// 项目样式
│  └─components								// 组件样式文件夹
│  └─views										// 页面样式文件夹       
│  ├─base.scss								// html样式
│  ├─iconfont.css							// 字体图标CSS
│  ├─index.css								// 样式总集
│  ├─mixins.css								// 常用css配置
│  ├─variables.css						// css变量
├─views											// 项目界面
```

