import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { plugin, defaultConfig } from '@formkit/vue';

/* add icons to the library */
library.add(fas, fab, far)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(store)
.use(plugin, defaultConfig)
.mount('#app')
