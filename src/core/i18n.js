import es from './assets/i18n/es.json'
import VueI18n from "vue-i18n";
import Vue from 'vue'

Vue.use(VueI18n)

export default new VueI18n({
  locale: "es",
  messages: {
    es: es
  }
})
