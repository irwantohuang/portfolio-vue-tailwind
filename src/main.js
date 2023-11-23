// import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Icons } from  './plugins/fontAwesome'

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out',
  delay: 0,
})

import './assets/style.css'

const app = createApp(App)

// app.use(router)
app.component('font-awesome-icon', Icons)
app.mount('#app')
