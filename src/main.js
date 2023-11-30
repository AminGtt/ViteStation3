import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ClockComponent from './components/ClockComponent.vue'
import SettingsComponent from './components/SettingsComponent.vue'

const app = createApp(App)

app.component("ClockComponent", ClockComponent)
app.component("SettingsComponent", SettingsComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')
