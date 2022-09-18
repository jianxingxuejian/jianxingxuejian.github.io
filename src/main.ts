import { createApp } from 'vue'
import { setupRouter } from './router'

import App from './App.vue'

import 'uno.css'
import './styles/css/index.css'

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  app.mount('#app')
}

setTimeout(() => {
  setupApp()
}, 500)
