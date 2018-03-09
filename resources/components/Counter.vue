<template>
    <div>
         <h1>{{message}}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
        <p>{{initcounter}}</p>      
    </div>
</template>

<script>
  export default {

    mounted() {
        console.log('Component mounted.')
    },
    data: function(){
       return {
           message: 'Example Counter',
           counter: this.initcounter*1
       }
    },
    props: ['initcounter'],
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

