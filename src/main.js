import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import { APP_STORE } from '../store';
import App from './App.vue'

import main_page from './components/main_page.vue'
import login from './components/login.vue'
import registration from './components/registration.vue'
import add_project from './components/add_project.vue'
import market from './components/market.vue'
import profile from './components/profile.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: main_page },
  { path: '/login', component: login },
  { path: '/registration', component: registration },
  { path: '/add-project', component: add_project },
  { path: '/market', component: market },
  { path: '/profile', component: profile },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

const store = new Vuex.Store(APP_STORE);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
