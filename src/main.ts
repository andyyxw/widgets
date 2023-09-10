import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import { WidgetJsPlugin } from '@widget-js/vue3'
import '@widget-js/vue3/dist/style.css'
import '@widget-js/vue3/dist/mingcute_icon/MingCute.css'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import ElementPlus from 'element-plus'
import './index.css'
import 'element-plus/dist/index.css'
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn.js'
dayjs.locale('cn')

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
app.use(WidgetJsPlugin)
//@ts-ignore
app.use(MotionPlugin)
app.use(router)
//@ts-ignore
app.use(pinia)
app.mount('#app')
