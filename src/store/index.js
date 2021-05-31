import Vue from 'vue'
import Vuex from 'vuex'

import weatherApiModule from './modules/weatherAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
  },
  mutations: {
    setBarImage(state, payload) {
      state.barImage = payload
    },
    set_drawer(state, payload) {
      state.drawer = payload
    },
  },
  actions: {},
  modules: {
    weatherApiModule
  }
})