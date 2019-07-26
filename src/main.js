import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


// Global mixins
// Vue.mixin({
//   filters:{
//       capitalize(value){
//         if(!value) return ''
//        return value.toUpperCase();
//       },
//       contentSnippet(value){
//         if(!value) return ''
//         return value.slice(0,70) + '...';
//       }
//     };
// });


// Custom Global Directives
Vue.directive('list',{
  bind(el ,binding , vnode){
    if(binding.value == "wide"){
        el.style.maxWidth="1200px"
    }
    if(binding.value == "narrow"){
      el.style.maxWidth="600px"
    }
    if(binding.arg == "orange"){
      el.style.backgroundColor = "orange"
    }
  }
});

Vue.directive('format',{
  bind(el ,binding , vnode){
    el.style.color = 'blue';
    el.style.fontSize= "30px";
    // We have to use camelCase like Font-size will become fontSize
  }
});

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
