 <template >
 
   <div class="WeiboBoxcontainer">
<el-row id="WeiboRow">
  <el-col :span="8">
    <div class="grid-content bg-purple">
          <div class="head">
             <div class="headImage">
               <img :src="HeadImage" alt="" style="width:100%:height:100%">
              </div>
              <div>{{UserName}}</div>
          </div>
    </div>
  </el-col>
</el-row>
<el-row id="WeiboRow">
  <el-col :span="24">
    <div class="content">{{Content}}</div>
  </el-col>
</el-row>
<el-row id="WeiboRow">
   <div class="imageContainer">
     <div class="ImageContainerInner">
         <viewer > 
             <img v-for="(item,i) in ImageList" :src="item" alt="" class="image" :key="i">
         </viewer>
      </div>   
  </div>
</el-row>

    <el-row id="WeiboRow">
       <el-col :span="24" class="botton"><router-link :to="{name:'WeiboDetail',query:{WeiboId:this.WeiboId,UserName:this.UserName}}">查看详情页</router-link></el-col>
    </el-row>

   </div>

 </template>
  <script>
  export default {
     data() {
               return {
                 photo:["http://localhost:3000/test.jpg","http://localhost:3000/test.jpg","http://localhost:3000/test.jpg","http://localhost:3000/test.jpg","http://localhost:3000/test.jpg","http://localhost:3000/test.jpg",],
            
               }
       },
       props:{
         Content:String,
         HeadImage:String,
         ImageList:Array,
         UserName:String,
         WeiboId:Number
       },
       created(){

       }
  }
  
  </script>
<style lang="css">
a{
  text-decoration: none;
  color: blue;
}
.ImageContainerInner{
  display: flex;
  justify-content: center;
  align-items: center;
  widows: 100%;
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
  margin-top: 15px;
  width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
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
   display: flex;
   justify-content: center;
   align-items: center;
   height: 30px;
   width: 30px;
   overflow: hidden;
   border-radius:50%;
}
.content{
  text-align:left;
  padding: 5px;
  width: 1100px;
  margin-top: 5px;
}
.WeiboBoxcontainer{
  width: 100%;
  margin-bottom: 20px;
  min-width: 1200px;
 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.el-main{
  padding: 0px;
  overflow: hidden;
  width: 1300px;
}
  .el-row {
    width:100%;
    margin: 0px;
    padding:0px;
  }
  #WeiboRow{
    width: 1200px;
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