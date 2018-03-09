import Vue from 'vue'
import Counter from './components/Counter.vue'


new Vue({
    el: '#app',
    template: '<Counter/>',
    components: { Counter },
    props: ['initcounter'],

})
  
