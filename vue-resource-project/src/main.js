import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
