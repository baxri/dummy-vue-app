import Vue from 'vue'
import App from './components/App.vue'

// Vue.config.productionTip = false

// Vue.component('App', require('./components/App.vue'))

// register
// Vue.component('my-component', 'App.')

// create a root instance
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
  

console.log('jigaro  kaci');