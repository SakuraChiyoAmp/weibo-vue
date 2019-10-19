<template>
  <div id="peopleContainer">
    <div id="leftPeopleContainer"> 
      <router-link :to="{path:'OtherPeoplePage',query:{UserName:this.UserName}}">
       <el-avatar shape="square" :size="70" fit="cover" :src="this.HeadImage"></el-avatar>
       </router-link>
       <div id="userName">{{this.UserName}}</div>
      </div>
      <div id="rightPeopleContainer">
        <el-switch
  v-model="Flag"
  active-text="关注"
  inactive-text="取关">
</el-switch>
      </div>
  </div>
</template>
<style lang="css" scoped>
    #peopleContainer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* background: red; */
      margin-top: 2px;
      height: 80px;
       -moz-box-shadow:2px 2px 5px #333333; -webkit-box-shadow:2px 2px 5px #333333; box-shadow:2px 2px 5px #333333;
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
import PostMsg from "../PostInterface"
  export default {
    data() {
      return {
        Flag:true
      }
    },
    props:{
      UserName:String,
      HeadImage:String,
      FocusFlag:Boolean,
    },
    methods: {
 
    },
    created(){
      this.Flag=this.FocusFlag;
    },
    watch:{
      Flag: function(newValue, oldValue){
              alert(newValue);
              PostMsg.Focus(this.$store.state.UserName,this.UserName,newValue);
      }
    }
  };
</script>