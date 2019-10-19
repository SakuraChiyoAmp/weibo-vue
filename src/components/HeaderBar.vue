<template>
  <div id="HeaderBarContainer">
      <i class="el-icon-loading"></i>
      <div id="titleDescription">简易微博系统V1.0</div>

      <div id="searchBox">
        <keep-alive>
   <el-form :inline="true" :model="formInline" class="demo-form-inline" v-if="this.path=='/MainPage'">
    <el-form-item label="搜索您想看的微博" >
    <el-input v-model="Key" placeholder="搜索微博内容"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</keep-alive>
  <router-link  to="/MainPage" v-if="this.path!='/MainPage'">
  <div id="backButton">
   <el-button type="success">返回首页</el-button>
   </div>
</router-link>
</div>
  </div>
</template>
<style lang="css">
#searchBox{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 500px;
  margin-top: 20px;
}
   #HeaderBarContainer{
     display: flex;
     flex-direction: row;
     height: 59px;
     width: 1880px;
     align-items: center;
     
    border-bottom:1px solid blue; 
   }
   #titleDescription{
     font-size: 25px;
     font-weight: bold;
     margin-left: 40px;
   }
   #searchDescription{
     font-size: 25px;
     font-weight: bold;
     margin-left: 400px;
     
   }
   #backButton{
     margin-bottom: 35px;
   }
</style>
<script>
  export default {
    data() {
      return {
        formInline: {
  Key:"",
        
        },
        path:'',
        Key:"",
      }
    },
    methods: {
      onSubmit() {
      
        this.$emit("Search",this.Key);
      },
     
    },
    created(){
        this.path=this.$route.path ;
    }
  }
</script>