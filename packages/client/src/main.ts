import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './index.css'
import UI from '@permalinguadev/ui'

const app = createApp(App)

app.use(UI)
app.mount('#app')
