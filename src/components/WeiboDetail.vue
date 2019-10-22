<template>
  <el-container>  
       <el-header>          
            <headerbar></headerbar>
       </el-header>
       <el-container>
         <el-aside><userinfo></userinfo></el-aside>
         <el-main>
             <div class="container">
                <el-row><el-col :span="8">
      <div class="grid-content bg-purple">
          <div class="head">
             <div class="headImage">
                <router-link :to="{path:'OtherPeoplePage',query:{UserName:this.$route.query.UserName}}">
                <el-image style="width: 100%; height: 100%" :src="PageInfo.HeadImage" fit="fit"></el-image>
                </router-link>
              </div>
              <div>{{this.$route.query.UserName}}</div>
          </div>
    </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="content">{{PageInfo.Content}}</div></el-col>
</el-row>
<el-row>
   <div class="imageContainer">
         <viewer >              
            
             <img v-for="(item,i) in PageInfo.ImageList" :src="item" alt="" class="image">
          </viewer>
  </div>
</el-row>
    <el-row>
       <el-col :span="24" class="botton">
         <div id="ZanBox">
              <dianzan v-if="this.PageInfo.UserName!=undefined" v-bind:ZanCount="PageInfo.ZanCount" v-bind:ZanFlag="PageInfo.ZanFlag"></dianzan>
         </div>
         </el-col>
    </el-row>
   </div>
   <div id="ConmmentPushBox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
    </el-input>
   <div id="space"></div>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">发表评论</el-button>
  </el-form-item>
</el-form>
</div>   

        <div id="CommentContainer" v-for="(e,index) of PageInfo.CommentList" :key="index"> 
                 <div id="CommentList">
                        <div id="CommentList_Left">
                          <router-link :to="{path:'OtherPeoplePage',query:{UserName:e.UserName}}" >
                                <el-image style="width: 70px; height: 70px" :src="e.HeadImage" fit="fit"></el-image>
                            </router-link>
                    
                                <div id="UserNameBox">{{e.UserName}}</div>                         
                       </div>
                       <div id="CommentList_Right">{{e.Comment}}</div>
                  </div>
        </div>        
     </el-main>
           
         </el-container>  
  </el-container>
    
</template>
<script>
import headerbar from "./HeaderBar"
import searchLeft from "./SearchLeft"
import userinfo from "./UserInfo"
import dianzan from "./Dianzan"
import GetMsg from "../GetInterface"
import PostMsg from "../PostInterface"
import store from "../store.js"
export default {
   components:{
    headerbar,
    searchLeft,
     userinfo,
     dianzan   
   }, 
   data() {
    return {
          photo:["http://47.97.190.96:3000/test.jpg","http://47.97.190.96:3000/test.jpg",],   
          formInline: {
          user: '',
          region: ''
        },
        PageInfo:{},
        textarea:'',
        UserName:"",
        HeadImage:"",
        ZanCount:0,
        ZanFlag:true,
        Content:"",
        CommentList:[],
        ImageList:[],
        // name:"",
       
      }
    },
         methods: {
      onSubmit: async function() {
        if (this.textarea.length==0){
          alert("评论不能为空哦");
          return false
        }else{        
            await PostMsg.Comment(this.$store.state.UserName,this.textarea,this.$route.query.WeiboId).then(result=>{
               alert("评论成功！");
             })
             await   GetMsg.WeiboDetail(this.$route.query.UserName,this.$route.query.WeiboId,this.$store.state.UserName).then(result=>{
                 this.PageInfo=result.data;      
             })
           this.textarea="";
        }
      },
      GetI:async function(){
         await       GetMsg.WeiboDetail(this.$route.query.UserName,this.$route.query.WeiboId,this.$store.state.UserName).then(result=>{
             this.PageInfo=result.data;   
      });

           await   GetMsg.GetMyInfo(this.$store.state.UserName).then(result=>{
            this.name=result.data.UserName;
        })
      }
    },
    created(){ 
      // GetMsg.WeiboDetail(this.$route.query.UserName,this.$route.query.WeiboId,this.$store.state.UserName).then(result=>{
      //        this.PageInfo=result.data;   
      //        console.log(this.PageInfo);   
      // }),
      //         GetMsg.GetMyInfo(this.$store.state.UserName).then(result=>{
      //       this.name=result.data.UserName;
      //   })
      this.GetI();
      
    },
    watch: {
 
    },

}
</script>
<style scoped>
#ConmmentPushBox{
  width: 1300px;
}
#ZanBox{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width:1300px;
  height: 100px;
}
#CommentList_Right{
    width: 1200px;
    height: 75px;
    font-size: 20px;
    text-align: left;
}
#UserNameBox{
  font-weight: bold;
  font-size: 20px;
}
#CommentList_Left{
   display: flex;
   flex-direction: row;
   justify-content:space-around;
   align-items: center;
   height: 75px;
   width: 200px;
   
}
#CommentList{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1380px;
  height: 80px;
  /* background: black; */
  margin-top: 5px;
}
  #CommentContainer{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
   width: 1380px;
   height: auto;
   border: 1px solid black;
   margin-top: 10px;
   -moz-box-shadow:2px 2px 18px #333333; -webkit-box-shadow:2px 2px 18px #333333; box-shadow:2px 2px 18px #333333;
  
}
  .el-main{
    margin-left: -100px;
    padding: 0px;
    height: auto;
  }
  .router-link-active {
    text-decoration: none;
    color: black;
    font-size: 20px;
}
.botton{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.imageContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.image{
   width: 200px;
   height: 200px;
   margin-right: 20px;
}
.head{
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  align-items: center;
}
.headImage{
   display: inline;
   height: 25px;
   width: 25px;
   overflow: hidden;
   border-radius:50%;
}
.content{
  text-align:left;
  padding: 5px;
}
.container{
   width: 1300px;
   margin-left: 50px;
   margin-top: 20px;
  margin-bottom: 20px;
 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.el-main{
  padding: 0px;
  border-block-color: red!important;
}
  .el-row {
    width:100%;
    margin: 0px;
    padding:0px;
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
  #space{
     height: 10px;
  }
</style>