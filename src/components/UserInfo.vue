<template>
  <div class="Container">
<el-row>
  <el-col :span="24"><div class="head">你好！{{this.$store.state.UserName}}</div></el-col>
</el-row>
<el-row>
  <el-col :span="24"> 
    
     <!-- <el-avatar src="http://localhost:3000/test.jpg"></el-avatar> -->
     <el-avatar shape="square" :size="100"  fit="fill" :src="HeadImage"></el-avatar>
    
    </el-col>
  <el-col :span="24">
    <!-- <div class="botton"><router-link to="/UserInforPage">点击进入个人主页</router-link></div> -->
    <el-link style="font-size:20px" type="primary" href="/#/MyPage">点击进入个人主页</el-link>
    </el-col>
    <el-col :span="24">
    <!-- <div class="botton"><router-link to="/UserInforPage">点击进入个人主页</router-link></div> -->
      <el-button type="danger" @click="LogOut()">退出登录</el-button>
    </el-col>
</el-row>


  </div>
</template>
 <script>
 import GetMsg from "../GetInterface"
 import PostMsg from "../PostInterface"
 export default {
   created(){
        GetMsg.GetMyInfo(this.$store.state.UserName).then(result=>{
            this.UserName=result.data.UserName;
            this.HeadImage=result.data.HeadImage;
        })
   },
   methods:{
        LogOut:async function(){
       
           PostMsg.LogOut(this.$store.state.UserName).then(result=>{
             console.log(result);
          })

          this.$store.dispatch("UserLogout");
          this.$router.push("/Login");
          

        }
   },
   data(){
     return{
        UserName:"",
        HeadImage:""
     }
   }
 }
 </script>
<style>
.router-link-active {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold
}
.botton{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.head{
  text-align: center;
  font-size: 20px;
  font-weight: bold
}
/* .img{
  height: 100px;
} */
  .Container{
    border: 1px solid black;
    width: 200px;
    height: 200px;
     border-radius:4px;
 -moz-box-shadow:3px 5px 20px #333333; -webkit-box-shadow:3px 5px 20px #333333; box-shadow:3px 5px 20px #333333;
  position: fixed;
  top:90px;
 left: 0px;
 
    }
  .el-row {
        margin: 0px; 
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>