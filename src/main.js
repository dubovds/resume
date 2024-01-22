import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(createMetaManager());
app.use(router)

app.mount('#app')
