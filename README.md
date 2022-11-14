# vue3-h5-template

基于Vue3 + Vue-Cli4 + Vant-ui + sass + axios封装的移动端模版

* 项目地址：[github](https://github.com/ZYCHOOO/vue3-h5-template)
* 掘金地址：[掘金](https://juejin.cn/post/7165881115331919886)

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
* [eruda 移动端调试](#eruda)
* [去除 console.log](#console)
* [rem 适配](#rem)
* [全局 sass 样式](#sass)
* [BEM 命名规范](#bem)
* [样式穿透](#deep)
* [iconfont图标管理](#iconfont)
* [适配苹果底部安全距离](#phonex)
* [proxy 跨域配置](#proxy)
* [使用 mock 数据](#mock)
* [axios 封装及接口拦截](#axios)
* [vue-router](#router)
* [gm-crypto 加解密](#gm)

### <span id="env">⚙️ 环境变量配置</span>

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
在`environment.js`文件中集中管理了环境变量，这样的好处是可以一目了然各个环境下的变量，而且改动后可以立即生效，不用重新运行项目才获取到

[🔙返回顶部](#catalogue)


### <span id="eruda">⚙️ eruda移动端调试</span>

在开发环境和测试环境中显示eruda调试工具

```
  npm install eruda

  eruda.init()
```

若要在其他自定义环境中显示eruda调试工具，在`enums.js`的`DEBUG_WHITE_LIST`白名单中修改配置即可

[🔙返回顶部](#catalogue)


### <span id="console">⚙️ 去除console.log</span>

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


### <span id="rem">⚙️ rem适配</span>

[🔙返回顶部](#catalogue)


### <span id="scss">⚙️ scss全局样式</span>

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


### <span id="bem">⚙️ BEM命名规范</span>

该项目使用BEM命名方法，由块（Block）元素（Element）修饰符（Modifier）组成，具有可读性且方便维护。

```css
  <!-- good -->
  <div class="header__btn--success" />
  <!-- bad -->
  <div class="header-btn-success" />
```

[🔙返回顶部](#catalogue)


### <span id="deep">⚙️ 样式穿透</span>

当你子组件使用了 `scoped` 但在父组件又想修改子组件的样式可以 通过 `:deep` 来实现

```css
  :deep .btn {
    background: lightskyblue;
  }
```

[🔙返回顶部](#catalogue)


### <span id="iconfont">⚙️ iconfont 图标管理</span>

[🔙返回顶部](#catalogue)


### <span id="phonex">⚙️ 适配苹果底部安全距离</span>

在`index.html`的meta中添加`viewport-fit=cover`

#### vant自带安全区适配

[底部指示条的适配](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)

Vant 中部分组件提供了 safe-area-inset-top 或 safe-area-inset-bottom 属性，设置该属性后，即可在对应的机型上开启适配

```html
  <!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
  />

  <!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top />

  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />

```

#### 全局mixins样式

在`mixins.scss`中有写好的样式，可直接用

```css
  @mixin bottom-safe-area {
    padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
  }
```

[🔙返回顶部](#catalogue)


### <span id="proxy">⚙️ proxy 跨域配置</span>

在`vue.config.js`的proxy中配置相应参数

```javascript
  proxy: {
    '/api': {
      target: 'https://test.xxx.com', // 测试环境URL
      // ws: true, // 是否启用websocket
      changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
      secure: false
    }
  },
```

[🔙返回顶部](#catalogue)


### <span id="mock">⚙️ 使用 mock 数据</span>

mock请求的封装采用的是[vue-element-admin 的 mock 请求封装](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#swagger)

- mock-server.js

```javascript
  import Mock from 'mockjs'
  import { getEnvValue } from '@/utils/environment'
  import user from './user'

  const mocks = [...user]
  function mockXHR () {
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
    Mock.XHR.prototype.send = function () {
      if (this.custom.xhr) {
        this.custom.xhr.withCredentials = this.withCredentials || false

        if (this.responseType) {
          this.custom.xhr.responseType = this.responseType
        }
      }
      this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap (respond) {
      return function (options) {
        let result = null
        if (respond instanceof Function) {
          const { body, type, url } = options
          result = respond({
            method: type,
            body: JSON.parse(body),
            query: url
          })
        } else {
          result = respond
        }
        return Mock.mock(result)
      }
    }

    for (const i of mocks) {
      Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
    }
  }

  export function initMockServer () {
    const NEED_MOCK = getEnvValue('VUE_APP_NEED_MOCK')
    if (NEED_MOCK) {
      mockXHR()
    }
  }
```

- user.js

```javascript
  import { getQueryString } from '@/utils/index'

  const tokens = {
    admin: { token: 'admin-token' },
    editor: { token: 'editor-token' }
  }

  const users = {
    'admin-token': {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    'editor-token': {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    }
  }

  export default [
    // user login
    {
      url: '/vue3-h5-template/user/login',
      type: 'post',
      response: config => {
        const { username } = config.body
        const token = tokens[username]

        // mock error
        if (!token) {
          return {
            code: 60204,
            message: 'Account and password are incorrect.'
          }
        }

        return {
          code: 200,
          data: token
        }
      }
    },

    // get user info
    {
      // eslint-disable-next-line no-useless-escape
      url: '/vue3-h5-template/user/info\.*',
      type: 'get',
      response: config => {
        console.log(config, 'config')
        const token = getQueryString(config.query, 'token')
        const info = users[token]

        // mock error
        if (!info) {
          return {
            code: 50008,
            message: 'Login failed, unable to get user details.'
          }
        }

        return {
          code: 200,
          data: info
        }
      }
    },

    // user logout
    {
      url: '/vue3-h5-template/user/logout',
      type: 'post',
      response: _ => {
        return {
          code: 200,
          data: 'success'
        }
      }
    }
  ]
```

在`main.js`中引入initMockServer，根据`.env.*`文件中的`VUE_APP_NEED_MOCK`参数来判断是否用mock数据

```javascript
  import { initMockServer } from '@/mock/mock-server'
  initMockServer()
```

[🔙返回顶部](#catalogue)


### <span id="axios">⚙️ axios 封装及接口拦截</span>

- httpEnums.js

  `utils/httpEnums.js`内含有http相应状态码、状态码、白名单的枚举

```javascript
  export default {
    // http响应状态码
    HTTP_STATUS: {
      // 1xx，临时响应
      TEMP_RESPOND: {
        Continue: 100, // 服务器通知浏览器之前一切正常，请客户端继续请求，如果请求结束，可忽略
        SwitchingProtocal: 101 // 针对请求头的Upgrade返回的信息。表明服务器正在切换到指定的协议
      },
      // 2xx，成功
      SUCCESS: {
        Ok: 200, // 请求成功
        Created: 201, // 常用于POST，PUT 请求，表明请求已经成功，并新建了一个资源。并在响应体中返回路径
        Accepted: 202, // 请求已经接收到，但没有响应，稍后也不会返回一个异步请求结果。 该状态码适用于等待其他进程处理或者批处理的场景
        NoAuthoritativeInformation: 203, // 表明响应返回的元信息（meta-infomation）和最初的服务器不同，而是从本地或者第三方获取的
        NoContent: 204, // 请求没有数据返回，但是头信息有用。用户代理(浏览器)会更新缓存的头信息
        ResetContent: 205, // 告诉用户代理（浏览器）重置发送该请求的文档
        ParticalContent: 206 // 客户端使用Range请求头时，返回该状态码
      },
      // 3xx，重定向
      REDIRECT: {
        MultipleChoice: 300, // 返回多个响应，需要浏览器或者用户选择
        MovedPermanently: 301, // 请求资源的URL被永久的改变，新的URL会在响应的Location中给出。浏览器到新的URL重新请求资源，因为有些客户端会把请求方式method改成GET。所以该状态码建议GET和HEAD方法中使用。搜索引擎会更新地址到资源的链接（SEO中‘link-judge’被发送到新的URL）
        Found: 302, // 请求资源的URL被暂时修改到Location提供的URL。未来可能还会有新的修改。览器会根据新的URL重新请求资源。有些客户端会把方法method改为GET，建议在GET和HEAD方法中使用。搜索引擎不会更改URL到资源的。
        SeeOther: 303, // 服务通过返回的响应数据指导客户端通过GET方法去另一个URL获取资源。通常用于POST或者PUT的请求返回结果，重定向到信息提示页面或者进度展示页面。重定向页面的方法是GET方法。
        NotModified: 304, // 资源未变更。服务器根据请求头判断，需要资源未修改，只返回响应头；否则将资源一起返回。
        TemporaryRedirect: 307, // 临时重定向。基本和302相同。唯一的区别是这个状态码严格禁止浏览器到新URL请求资源时修改原来的请求方式和请求体。
        PermanentRedirect: 308 // 永久重定向。基本和301相同。但是严格禁止修改请求方式和请求体。
      },
      // 4xx，请求错误
      REQUEST_ERROR: {
        BadRequest: 400, // 请求语法有问题，服务器无法识别。
        UnAuthorized: 401, // 客户端未授权该请求。缺乏有效的身份认证凭证，一般可能是未登陆。登陆后一般都解决问题。
        Forbidden: 403, // 服务器拒绝响应。权限不足。
        NotFound: 404, // URL无效或者URL有效但是没有资源。
        MethodNotAllowed: 405, // 请求方式Method不允许。但是GET和HEAD属于强制方式，不能返回这个状态码。
        NotAccepted: 406, // 资源类型不符合服务器要求。
        ProxyAuthorizationRequired: 407, //  需要代理授权。
        RequestTimeout: 408, // 服务器将不再使用的连接关闭。响应头会有Connection: close。
        UpgradeRequired: 426 // 告诉客户端需要升级通信协议。
      },
      // 5xx，服务器错误
      SERVER_ERROR: {
        InternalServerError: 500, // 服务器内部错误，未捕获。
        BadGateway: 502, // 服务器作为网关使用时，收到上游服务器返回的无效响应。
        ServiceUnavailable: 503, // 无法服务。一般发生在因维护而停机或者服务过载。一般还会伴随着返回一个响应头Retry-After: 说明恢复服务的估计时间。
        GateTimeout: 504, // 网关超时。服务器作为网关或者代理，不能及时从上游服务器获取响应返回给客户端。
        HttpVersionNotSupported: 505 // 发出的请求http版本服务器不支持。如果请求通过http2发送，服务器不支持http2.0，就会返回该状态码。
      }
    },
    // http状态码
    CODES: {
      Success: 200,
      UnAuthorized: 401
    },
    // http状态码白名单，在具体业务中处理
    ERRCODE_WHITE_LIST: []
  }
```

- request.js

  `utils/request.js` 封装了axios，开发者需要根据后台接口做修改

```javascript
  import axios from 'axios'
  import store from '@/store'
  import { Notify } from 'vant'
  import httpEnums from '@/utils/httpEnums'
  import { getToken } from '@/utils/storage'
  import { getEnvValue } from '@/utils/environment'

  // create an axios instance
  const request = axios.create({
    baseURL: getEnvValue('VUE_APP_BASE_API'),
    timeout: 10000
  })

  const requestArr = [request]

  // 一段时间内的提示显示的防抖，防抖时间设置为5秒
  let errMsgDebounceTimer = null
  const errMsgDebounceWait = 5000

  requestArr.forEach(service => {
    // request interceptor
    service.interceptors.request.use(
      async config => {
        if (store.getters.token) {
          config.headers.Authorization = `Bearer ${getToken()}`
        }
        return config
      },
      error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
      }
    )

    // response interceptor
    service.interceptors.response.use(
      async response => {
        const res = response.data

        // blob文件流
        if (res instanceof Blob) {
          return res
        }

        // 成功
        if (res.code === httpEnums.CODES.Success) {
          return res
        }

        // token失效
        if (res.code === httpEnums.CODES.UnAuthorized) {
          return Promise.reject(new Error('token过期！'))
        }

        const errMsg = res.message || res.msg

        Notify({
          message: errMsg || 'Error',
          type: 'danger',
          duration: 5 * 1000
        })
        return Promise.reject(new Error(errMsg || 'Error'))
      },
      async error => {
        console.log('err' + error) // for debug

        // 定时器提示报错的防抖
        const errorDebounceHandler = (errorMessage) => {
          if (errMsgDebounceTimer) clearTimeout(errMsgDebounceTimer)
          const callNow = !errMsgDebounceTimer
          errMsgDebounceTimer = setTimeout(() => {
            errMsgDebounceTimer = null
          }, errMsgDebounceWait)

          if (callNow) {
            Notify({
              message: errorMessage,
              type: 'danger',
              duration: errMsgDebounceWait
            })
          }
        }

        const errorData = error.response.data
        const errorStatus = error.response.status

        if (errorStatus === httpEnums.HTTP_STATUS.REQUEST_ERROR.UnAuthorized) {
          errorDebounceHandler(error.message)
        } else if (errorData.code === httpEnums.HTTP_STATUS.SERVER_ERROR.InternalServerError) {
          // 500特殊处理
          return Promise.reject(error)
        } else {
          errorDebounceHandler(error.message)
          return Promise.reject(error)
        }
      }
    )
  })

  export { request }
```

#### 接口管理

在`api/modules`下管理各个模块接口，以`test.js`为例

- url 接口地址
- method 请求方法
- data/params 请求参数

```javascript
import { request } from '@/utils/request'

export const getUserInfo = (params) => {
  return request({
    url: '/vue3-h5-template/user/info',
    method: 'GET',
    params
  })
}
```

#### 调用方式

以`login.vue`为例

```javascript
  import { reactive, toRefs } from 'vue'
  import { login } from '@/api/modules/test'
  setup () {
    const loginForm = reactive({ username: '', password: '' })
    const { username, password } = toRefs(loginForm)
    const result = await login({ username: username.value, password: password.value })
    const { token } = result
  }
```

[🔙返回顶部](#catalogue)


---

# 鸣谢

[vue3-h5-template](https://github.com/ynzy/vue3-h5-template)
[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)


