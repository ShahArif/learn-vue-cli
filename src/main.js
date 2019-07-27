import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(VueAxios,axios);
const router = new VueRouter({
  routes: Routes,
  // mode:"hash",  hash is the default mode which includes # in the URL.
  mode:"history"
});

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
