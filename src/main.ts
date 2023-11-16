import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTablerIcons from 'vue-tabler-icons';
import { loadFonts } from './plugins/webfontloader'
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from "vue3-apexcharts";
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/scss/style.scss';

// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

loadFonts()

createApp(App)
  .use(router)
  .component('EasyDataTable', Vue3EasyDataTable)
  .use(PerfectScrollbar)
  .use(VueApexCharts)
  .use(VueTablerIcons)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
