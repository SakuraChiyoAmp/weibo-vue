<template>
  <el-container> 
       <el-header> 
            <headerbar> </headerbar>
       </el-header>
   
  
       <el-container>
         <el-main> 
           <div id="mainBox">
              <div id="headerBox">
                <el-image style="width: 100px; height: 100px" :src="this.HeadImage" fit="fit"></el-image>
                    <div>{{this.UserName}}</div>
              </div>
              <div id="contentBox"> 
  <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-user-solid"></i> 我的关注</span>
    <div v-for="(e,index) of Focus" :key="index">
    <focus v-if="Focus.length!=0" v-bind:UserName="e.UserName" v-bind:HeadImage="e.HeadImage" v-bind:FocusFlag="e.FocusFlag"> </focus>
    </div>
  </el-tab-pane>
   <el-tab-pane>
    <span slot="label"><i class="el-icon-star-on"></i> 我的粉丝</span>
       <div v-for="(e,index) of Fans" :key="index">
       <fans v-if="Fans.length!=0" v-bind:UserName="e.UserName" v-bind:HeadImage="e.HeadImage"> </fans>
        </div>
  </el-tab-pane>
   <el-tab-pane>
    <span slot="label"><i class="el-icon-s-home"></i> 我的微博</span>
     <div v-for="(e,index) of WeiboList" :key="index">
           <weibobox 
           v-bind:Content="e.Content"
           v-bind:HeadImage="e.HeadImage"
           v-bind:ImageList="e.ImageList"
           v-bind:UserName="e.UserName"
           v-bind:WeiboId="e.WeiboId"
            v-if="WeiboList.length!=0"> </weibobox>
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
import focus from "./Focus"
import fans from "./Fans"
import weibobox from "./WeiboBox"
import GetInterface from "../GetInterface"
export default {
   components:{
    headerbar,
    focus,
    fans,
    weibobox
   },
   data(){
     return {
       UserName:"",
       HeadImage:"",
       Focus:[],
       Fans:[],
       WeiboList:[],
     }
   },
   created(){
     GetInterface.GetMyPageInfo(this.$store.state.UserName).then(result=>{
       this.UserName=result.data.UserName;
       this.HeadImage=result.data.HeadImage;
       this.Focus=result.data.Focus;
       this.Fans=result.data.Fans;
       this.WeiboList=result.data.WeiboList;
       console.log(result);
       console.log(this.Focus[0].FocusFlag);
       console.log(typeof this.Focus[0].FocusFlag);
       var a=true;
       console.log(typeof a);
     })
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