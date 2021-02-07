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
import connect_with_admin from './components/connect_with_admin.vue'
import chat_fund from './components/chat_fund.vue'

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
  { path: '/connect_with_admin', component: connect_with_admin },
  { path: '/chat-fund/:id', component: chat_fund },
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


Vue.directive('phone', {
  bind(el) {
    function replaceNumberForInput(value) {
      let val = ''
      const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

      if (!x[2] && x[1] !== '') {
        val = x[1] === '8' ? x[1] : '8' + x[1]
      } else {
        val = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
      }

      return val
    }

    function replaceNumberForPaste(value) {
      const r = value.replace(/\D/g, '')
      let val = r
      if (val.charAt(0) === '7') {
        val = '8' + val.slice(1)
      }
      return replaceNumberForInput(val)
    }

    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      this.value = replaceNumberForInput(this.value)
    }

    el.onpaste = function () {
      setTimeout(() => {
        const pasteVal = el.value
        this.value = replaceNumberForPaste(pasteVal)
      })
    }

  }
})