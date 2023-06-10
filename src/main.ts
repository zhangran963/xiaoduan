import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createDirectives } from '@/directives/index'
import Modal from '@/utils/dialog/index'

const app = createApp(App)
app.use(createPinia())
app.use(router)
createDirectives(app)
app.mount('#app')
app.use(Modal)
