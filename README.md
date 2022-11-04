# vue3-h5-template

基于Vue3 + Vue-Cli4 + Vant-ui + sass + axios封装的移动端模版

* 项目地址：[github](https://github.com/ZYCHOOO/vue3-h5-template)

### 项目结构
```
vue-h5-template
├─ public            // 静态资源
│  ├─ favicon.ico      // 图标 
│  └─ index.html		   // 首页
├─ src               // 源码目录
│  ├─ api							 // 接口目录，与后端对接       
│  ├─ assets					 // UI资源
│  ├─ components			 // 公共组件
│  ├─ hooks	           // vue3-hooks
│  ├─ router					 // vue-router 路由，分模块加目录引入到index.js
│     ├─ index.js        // 路由注册
│     └─ permission.js	 // 路由全局守卫
│  ├─ store					   // vuex
│  ├─ styles					 // 项目样式
│     ├─ components			 // 组件样式
│     ├─ views					 // 页面样式      
│     ├─ base.scss			 // html样式
│     ├─ iconfont.css		 // 字体图标CSS
│     ├─ index.css			 // 全局通用样式
│     ├─ mixins.css			 // 全局mixins样式
│     └─ variables.css	 // css变量
│  ├─ utils						 // 工具类
│     ├─ enums.js		     // 枚举值
│     ├─ environment.js	 // 环境变量及方法
│     ├─ request.js			 // axios 封装
│     └─ storage.js	     // 本地存储封装
│  ├─ views					   // 页面
│  ├─ App.vue				   // 入口vue
│  ├─ main.js					 // 入口main.js
│  ├─ .env.development // 开发环境
│  ├─ .env.test				 // 测试环境
│  ├─ .env.stage			 // 预发布环境
│  ├─ .env.production	 // 发布环境
│  ├─ .eslintrc.js	   // eslint 配置
│  ├─ .gitignore       // git 忽略配置
│  ├─ .babel.config.js // babel 配置
│  └─ package.json     // 依赖管理
```

### 项目启动
```
  git clone git@github.com:ZYCHOOO/vue3-h5-template.git

  cd vue-h5-template

  npm install

  npm run serve
```


