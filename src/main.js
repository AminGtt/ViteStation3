import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Clock from './components/ClockComponant.vue'

const app = createApp(App)

app.component("ClockComponant", Clock)

app.use(createPinia())
app.use(router)

app.mount('#app')
