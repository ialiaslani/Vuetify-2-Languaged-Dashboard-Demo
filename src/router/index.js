import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lng',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [{
        path: '/:lng/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/:lng/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router