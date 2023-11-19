// import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icons } from  './plugins/fontAwesome'

import './assets/style.css'

const app = createApp(App)

// app.use(router)
app.component('font-awesome-icon', Icons)
app.mount('#app')
