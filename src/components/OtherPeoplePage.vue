<template>
  <el-container> 
       <el-header> 
            <headerbar> </headerbar>
       </el-header>
   
  
       <el-container>
         <el-main> 
           <div id="mainBox">
              <div id="headerBox">
                <el-image style="width: 100px; height: 100px" :src="HeadImage" fit="fit"></el-image>
                    <div>{{PageInfo.UserName}}</div>
                    <el-switch
  v-model="FocusFlag"
  active-text="关注"
  inactive-text="取关">
</el-switch>
              </div>
              <div id="contentBox"> 
  <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-user-solid"></i> 他的关注</span>
    <div v-for="(e,index) of PageInfo.Focus" :key="index">
    <otherpeoplefocus v-if="PageInfo.Focus.length!=0" v-bind:UserName="e.UserName" v-bind:HeadImage="e.HeadImage"> </otherpeoplefocus>
    </div>
  </el-tab-pane>
   <el-tab-pane>
    <span slot="label"><i class="el-icon-star-on"></i> 他的粉丝</span>
       <div v-for="(e,index) of PageInfo.Fans" :key="index">
       <fans v-if="PageInfo.Fans.length!=0" v-bind:UserName="e.UserName" v-bind:HeadImage="e.HeadImage"> </fans>
        </div>
       
  </el-tab-pane>
   <el-tab-pane>
    <span slot="label"><i class="el-icon-s-home"></i> 他的微博</span>
        <div v-for="(e,index) of PageInfo.WeiboList" :key="index">
           <weibobox 
           v-bind:Content="e.Content"
           v-bind:HeadImage="e.HeadImage"
           v-bind:ImageList="e.ImageList"
           v-bind:UserName="e.UserName"
           v-bind:WeiboId="e.WeiboId"
            v-if="PageInfo.WeiboList.length!=0"> </weibobox>
        </div>
 
  </el-tab-pane>
</el-tabs>
              </div>
            </div>
         </el-main>
        </el-container>
  </el-container>
    
</template>
<script>

import headerbar from "./HeaderBar"
import fans from "./Fans"
import weibobox from "./WeiboBox"
import otherpeoplefocus from "./OtherPeopleFocus"
import GetMsg from "../GetInterface"
import PostMsg from "../PostInterface"
export default {
   components:{
    headerbar,
     fans,
     weibobox,
     otherpeoplefocus
   },
   data(){
     return {
       PageInfo:{},
       HeadImage:"",
       FocusFlag:false,
     }
   },
   created(){
     if (this.$store.state.UserName==this.$route.query.UserName){
        this.$router.replace('/MyPage')
     }
     GetMsg.GetOtherInfo(this.$store.state.UserName,this.$route.query.UserName).then(result=>{
       this.HeadImage=result.data.HeadImage;
       this.FocusFlag=result.data.FocusFlag;
       this.PageInfo=result.data; 
     })
   },
   watch:{
     FocusFlag:function(newValue,oldValue){
       
       PostMsg.Focus(this.$store.state.UserName,this.$route.query.UserName,newValue).then(result=>{
         console.log(result);
       })
     },
       '$route'(to, from) {
     console.log("改变");
      this.flash();
   }
   },
   methods:{
     flash(){
     GetMsg.GetOtherInfo(this.$store.state.UserName,this.$route.query.UserName).then(result=>{
       this.HeadImage=result.data.HeadImage;
       this.PageInfo=result.data;     
     })       
     }
   }
}
</script>
<style >
  .el-main{
    margin-left: -100px;
    padding: 0px;
  }
  #headerBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  #mainBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  #contentBox{
    width:1800px;
    margin-left: 110px;
    margin-top: 50px;
  }

</style>