import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'

import { initDebugTool } from '@/utils/debug'
import { initMockServer } from '@/mock/mock-server'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'normalize.css'
import '@/styles/index.scss'
import 'amfe-flexible/index.js'

import '@/router/permission'

initDebugTool()
initMockServer()

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs
app.use(store).use(router).use(Vant).mount('#app')
