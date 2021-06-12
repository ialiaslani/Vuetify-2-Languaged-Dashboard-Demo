import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import Dashboard from '../views/Dashboard.vue'
import GoogleMaps from '../views/GoogleMaps.vue';

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
      },
      {
        path: '/:lng/maps',
        name: "GoogleMaps",
        component: GoogleMaps
      },
      {
        path: '/:lng/EditProfile'
      },
      {
        path: '/:lng/Settings'
      },
      {
        path: '/:lng/Pricing'
      },
      {
        path: '/:lng/LoginPage'
      },
      {
        path: '/:lng/UserPage'
      },
      {
        path: '/:lng/ErrorPage'
      },
      {
        path: '/:lng/Form'
      },
      {
        path: '/:lng/fullScreenMaps'
      },
      {
        path: '/:lng/Widgets'
      },
      {
        path: '/:lng/Charts'
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