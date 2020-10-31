import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/history',
  name: 'history',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/History/History.vue')
},
{
  path: '/cashier',
  name: 'cashier',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Cashier/Cashier.vue')
},
{
  path: '/login',
  name: 'login',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
