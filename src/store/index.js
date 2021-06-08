import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import weatherApiModule from './modules/weatherAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    selectedColor: 'pink',
    alert: false,
    alertMessage: ''
  },
  getters: {
    selectedColor: state => {
      return state.selectedColor
    },
    alert: state => {
      return state.alert
    },
    alertMessage: state => {
      return state.alertMessage
    }
  },
  mutations: {
    setBarImage(state, payload) {
      state.barImage = payload
    },
    set_drawer(state, payload) {
      state.drawer = payload
    },
    setColor(state, data) {
      state.selectedColor = data
    },
    post_example: (state, data) => {
      state.alert = !state.alert
      state.alertMessage = data
    }
  },
  actions: {
    POST_EXAMPLE: async (contaxt, data) => {
      await axios.post('https://jsonplaceholder.typicode.com/posts', data).then(res => {
        contaxt.commit('post_example', res.data.body)
      }).catch(e => {
        console.log(e);
      })
    }
  },
  modules: {
    weatherApiModule
  }
})