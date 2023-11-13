import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTablerIcons from 'vue-tabler-icons';
import { loadFonts } from './plugins/webfontloader'
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/scss/style.scss';

loadFonts()

createApp(App)
  .use(router)
  .use(PerfectScrollbar)
  .use(VueTablerIcons)
  .use(vuetify)
  .mount('#app')
