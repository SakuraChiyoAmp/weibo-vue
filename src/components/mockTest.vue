<template>
<div>
   
     <div>{{userInfoMsg}}</div>
      <img :src="userInfoMsg.imageUrl" alt="" style="width:200px,height:200px">
      <img src="http://47.97.190.96:3000/test.jpg" alt="">
     <button value="测试userInfoMsg" @click="testUerInfo()">测试userInfoMsg</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          userInfoMsg:{
              usrName:"",
              password:"",
              imageUrl:""
          }
      };
    },
     created(){
     this.testUerInfo();
    },
    methods:{
          testUerInfo(){
                 this.$axios.get("http://47.97.190.96:3000/testMock/userInfor").then(res=>{
                   window.console.log(res);
                    this.userInfoMsg.usrName=res.data.userName;
                    this.userInfoMsg.password=res.data.password;
                    this.userInfoMsg.imageUrl=res.data.imageUrl;
                    
                 }).catch(err=>{
                   window.console.log(err)
                 })
          } 
    },
   
  }
</script>