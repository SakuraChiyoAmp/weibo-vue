<template>
          <div id="ZanMainContainer">
             <div id="ZanMainContainer_Left">
                <transition name="ZanAnimate" >
                  <i class="el-icon-thumb" v-if="Flag" id="ZanIconTrue" @click="Change()"></i>
                </transition>
               <transition name="ZanAnimate" >
                   <i class="el-icon-thumb" v-if="!Flag" id="ZsnIconFalse" @click="Change()"></i>
                   </transition> 
             </div>
             <div id="ZanMainContainer_Right">
                           {{ZanCountAimateBetween}}
             </div>
          </div>
</template>
<style lang="css">
     /* 显示过程中的动画效果 */
        .ZanAnimate-enter-active {
            animation: bounce-in 1s;
        }
        /* 隐藏过程中的动画效果 */
      

        @keyframes bounce-in {
            0% { /*持续时长百分比，比如针对1s： 0%代表0秒，50%代表0.5*/
                transform: scale(0); /*缩小为0*/
            }

            50% {
                transform: scale(1.5); /*放大1.5倍*/
            }

            100% {
                transform: scale(1); /*原始大小*/
            }
        }
</style>
<style lang="css">
 #ZanIconTrue{
   color:blue;
 }
#ZanMainContainer_Left{
  font-size: 50px;
   width: 100px;
   height: 100px;
   display: flex;
   flex-direction:column;
   align-content: center;
   justify-content: center;
}
#ZanMainContainer_Right{
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  line-height: 100px;
}
  #ZanMainContainer{
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 100px;
    
  }
</style>
<script>
import PostMsg from "../PostInterface"
import TweenLite from "../../node_modules/gsap"
export default {
  methods: {
    Change () {
       this.Flag=!this.Flag;
       PostMsg.ZanFlagChange(this.$store.state.UserName,this.$route.query.WeiboId,this.Flag).then(result=>{
        
       });
       if(this.Flag==false){
   this.ZanCount=this.ZanCount-1;
   this.ZanCountAnimate=this.ZanCountAnimate-1;
       }else{
         this.ZanCount=this.ZanCount+1;
         this.ZanCountAnimate=this.ZanCountAnimate+1;
       }
    },
  }, 
  created(){
   this.Flag=this.ZanFlag;
  },
  beforeMount(){
    TweenLite.to(this.$data,0.5,{ZanCountAnimate:this.ZanCount.toFixed(0)})
  },
  data(){
      return {
        Flag:true,
        ZanCountAnimate:0,
     
      }
    },
    props:{
      ZanCount:Number,
      ZanFlag:Boolean,
    },
    computed:{
      ZanCountAimateBetween:function(){
        return this.ZanCountAnimate.toFixed(0);
      }
    }
}
</script>