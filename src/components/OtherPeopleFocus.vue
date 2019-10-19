<template>
  <div id="peopleContainer">
    <div id="leftPeopleContainer">
        <router-link :to="{path:'OtherPeoplePage',query:{UserName:this.UserName}}">
       <el-avatar shape="square" :size="70" fit="cover" :src="HeadImage"></el-avatar>
       </router-link>
       <div id="userName">{{UserName}}</div>
      </div>
      <div id="rightPeopleContainer">
        
      </div>
  </div>
</template>
<style lang="css" scoped>
    #peopleContainer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    -moz-box-shadow:2px 2px 5px #333333; -webkit-box-shadow:2px 2px 5px #333333; box-shadow:2px 2px 5px #333333;
      margin-top: 5px;
      height: 80px;
    }
    #leftPeopleContainer{
       height: 80px;
       width: 200px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;      
    }
    #rightPeopleContainer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    }
</style>
<script>
export default {
    data() {
      return {
        
     
      }
    },
    props:{
      UserName:String,
      HeadImage:String,
      
    },
    created(){
      console.log("开始创建")
      console.log(this.UserName);
      console.log(this.HeadImage);
    }
  };
</script>