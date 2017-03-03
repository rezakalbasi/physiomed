import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
});

new Vue({
  el: '#app',
  render: h => h(App)
})
