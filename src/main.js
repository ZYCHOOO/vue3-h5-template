import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'normalize.css'
import '@/styles/index.scss'

// import '@/router/permission'

createApp(App).use(store).use(router).use(Vant).mount('#app')
