<template>
  <div>
       测试登录 <button @click="submitForm()"></button>
  </div>
</template>
<script>

</script>
<script>export default {
    data() {
           return {
             name:"nmsl"
           }
    },
    methods:{
      submitForm(){
             this.$axios({
        url:"http://localhost:3000/login",
        method:"post",
        data:{UserName:"UserA",Password:"PasswordA"},
      }).then(res=>{
           if (res.data.state=="success"){
              this.$store.dispatch("UserName","UserA"),
              this.$store.dispatch("UserLogin",res.data.token)
           }
      })
      },
    }
  }

</script>