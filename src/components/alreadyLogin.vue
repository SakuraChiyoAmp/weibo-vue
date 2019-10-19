<template>
  <div>
          <div>{{this.$store.state.UserName}}</div>
          退出登录 <button @click="remove()"></button>
  </div>
</template>
<script>
export default {
    methods:{
      remove(){
         this.$store.dispatch("UserLogout")
         },
}}
</script>
