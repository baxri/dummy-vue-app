<template>
    <div>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
        <h1>{{message}}</h1>
        <p>{{counter}}</p>      
    </div>
</template>

<script>
  module.exports = {
    data: function(){
       return {
           message: 'Helo App',
           counter : 1
       }
    },

    methods: {
        plus: function(){
            this.counter++
        },

        minus: function(){
            this.counter--
        }

       
    }
  };
</script>

