import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

vue.user(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
