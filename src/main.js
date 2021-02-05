import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import { APP_STORE } from '../store';
import App from './App.vue'

import main_page from './components/main_page.vue'
import login from './components/login.vue'
import registration from './components/registration.vue'
import projects from './components/projects.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: main_page },
  { path: '/login', component: login },
  { path: '/registration', component: registration },
  { path: '/projects', component: projects },
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
