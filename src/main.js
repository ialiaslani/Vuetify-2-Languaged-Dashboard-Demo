import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import CountryFlag from 'vue-country-flag'
import i18n from './i18n'

Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let lng = to.params.lng
  if (!lng) {
    lng = 'en'
  }

  i18n.locale = lng
  next()
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')