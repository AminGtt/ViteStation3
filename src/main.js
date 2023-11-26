import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import HomeComponant from './components/HomeComponant.vue'

const app = createApp(App)

app.component("HomeComponant", HomeComponant)

app.use(createPinia())
app.use(router)

app.mount('#app')
