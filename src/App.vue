<template>
  <div id="app">
    
    <transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <router-view></router-view> 
    
    </transition>  
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  overflow-y:scroll；
}
</style>
<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
      
  }
}
</script>
