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

    props: ['initCounter', 'initMessage'],
      
    mounted() {
        console.log('Component mounted.')
    },
    data: function(){
       return {
           message: this.initMessage,
           counter: this.initCounter,
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

