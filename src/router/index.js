import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/history',
  name: 'History',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/History.vue')
},
{
  path: '/cashier',
  name: 'Cashier',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Cashier.vue')
},
{
  path: '/landingpage',
  name: 'LandingPage',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/LandingPage.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
