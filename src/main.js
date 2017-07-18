// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import Detial from './pages/detial'
import VueResource from 'vue-resource'
import publish from './pages/detial/publish'
import analysis from './pages/detial/analysis'
import forecast from './pages/detial/forecast'
import count from './pages/detial/count'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }, {
      path: '/detial',
      component: Detial,
      redirect: '/detial/count',
      children: [
        {
          path: 'count',
          component: count
        }, {
          path: 'forecast',
          component: forecast
        }, {
          path: 'analysis',
          component: analysis
        }, {
          path: 'publish',
          component: publish
        },
      ]
    }
  ]
})
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
