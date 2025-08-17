import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faWhatsapp, faLinkedin)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
