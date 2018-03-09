<template>
    <div>
         <h1>{{message}}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
        <p>{{counter}}</p>      
    </div>
</template>

<script>
  export default {
    mounted() {
        console.log('Component mounted.')
    },
    props: ['initcounter'],
    data: function(){
       return {
           message: 'Example Counter',
           counter: this.initcounter*1
       }
    },

    methods: {
        plus: function(){
            this.counter++
            console.log(this.counter);
        },

        minus: function(){
            this.counter--
            console.log(this.counter);
            
        }

       
    }
  };
</script>

