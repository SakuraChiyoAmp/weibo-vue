<template>
  <el-container>   
       <el-header> 
            <headerbar @Search="Search">
           </headerbar>
       </el-header>
       <el-container>
         <el-aside><userinfo></userinfo></el-aside>
         <el-main > 
            <pushweibo></pushweibo>
         
               <transition-group name="fade">
           <div v-for="(e,index) of WeiboList" :key="index" id="weiboContainer"  >
           <weibobox 
           v-bind:Content="e.Content"
           v-bind:HeadImage="e.HeadImage"
           v-bind:ImageList="e.ImageList"
           v-bind:UserName="e.UserName"
           v-bind:WeiboId="e.WeiboId"
            v-if="WeiboList.length!=0"> </weibobox>
              </div>
              </transition-group>
            <el-button type="primary" v-if="this.flag" @click="GetMore()">查看更多</el-button>
         </el-main>
         </el-container>
 <backtop>  </backtop>  
  </el-container>
    
</template>
<script>
import headerbar from "./HeaderBar"
import searchLeft from "./SearchLeft"
import weibobox from "./WeiboBox"
import userinfo from "./UserInfo"
import pushweibo from "./PushWeibo"
import backtop from "./BackTop"
import GetMsg from "../GetInterface"


export default {
   components:{
    headerbar,
    searchLeft,
     weibobox,
     userinfo,
     pushweibo,
      backtop,

   },
   created(){
      GetMsg.GetFreshWeibo().then(result=>{
        this.WeiboList=result.data.WeiboList;
      })

   },
   data(){
     return{
          WeiboList:[],
          flag:true
     }
   },
   methods:{
       Search:function (key){
        GetMsg.SearchWeibo(key).then(result=>{
          this.WeiboList=result.data.WeiboList;
        })
        console.log(key.length);
        if(key.length==0){
          this.flag=true;
        }else{
          this.flag=false;
        }
        console.log(this.flag);
     },
     GetMore:async function(){
             GetMsg.GetFreshWeibo().then(result=>{
        this.WeiboList.push(...result.data.WeiboList)
      })
     },
   
     
   }

}
</script>
<style >
  .el-main{
   width: 1300px!important;
    padding: 0px;
    overflow: hidden!important;
  }
  #weiboContainer{
    margin-left: 100px;
  }
  .fade-enter-active:nth-child(5n){
  transition: all 0.5s ease;
 }
 .fade-enter-active:nth-child(5n+1){
  transition: all 1s ease;
 }
 .fade-enter-active:nth-child(5n+2){
  transition: all 1.5s ease;
 }
 .fade-enter-active:nth-child(5n+3){
  transition: all 2s ease;
 }
 .fade-enter{
 opacity: 0;
  /* transform: translateY(100%); */
 }
 .fade-enter-to{
  opacity: 1;
  /* transform: translateY(0); */
 }
</style>