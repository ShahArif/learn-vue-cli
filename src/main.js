import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Service from './views/Services'


Vue.use(VueRouter);

const routes = [
  { path: "/" , component: Home},
  { path: "/about" , component: About},
  { path: "/services" , component: Service},

];
const router = new VueRouter({
  routes: routes
});

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
