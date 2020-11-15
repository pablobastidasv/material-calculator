import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/core/i18n";

import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
