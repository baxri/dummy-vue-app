import Vue from 'vue'
import Counter from './components/Counter.vue'

// Register components here
Vue.component('counter', Counter)

// Main vue instance
new Vue({
    el: '#app',    
})