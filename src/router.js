import Vue from 'vue'
import Router from 'vue-router'
import PostAndGet from "./components/PostAndGet.vue"
import alreadyLogin from "./components/alreadyLogin.vue"
import otherpeoplepage from "./components/OtherPeoplePage.vue"
import mypage from "./components/MyPage.vue"
import weibodetail from "./components/WeiboDetail.vue"
import mainpage from "./components/MainPage.vue"
import signup from "./components/SignUp.vue"
import login from "./components/Login.vue"
import store from "./store"
import test from "./components/Test.vue"
import Error from "./components/404.vue"
import { sign } from 'crypto'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path:"/404",
      name:"404",
      component:Error,
    },
    {
      path:"/Login",
      name:login,
      component:login
    },
    {
      path:"/",
      name:login,
      component:login
    },
    {
      path:"/SignUp",
      name:sign,
      component:signup
    },
    {
      path:"/alreadyLogin",
      name:"alreadyLogin",
      component:alreadyLogin,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/MyPage",
      name:"MyPage",
      component:mypage,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/OtherPeoplePage",
      name:"OtherPeoplePage",
      component:otherpeoplepage,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/WeiboDetail",
      name:"WeiboDetail",
      component:weibodetail,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/MainPage",
      name:"MainPage",
      component:mainpage,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/Test",
      name:"Test",
      component:test,
      meta:{
        requiresAuth:true
      }
    },
    {
        path:"*",
        redirect:"/404"
    },


  ]
});
router.beforeEach((to, from, next) => {
  let token = store.state.token; 
  console.log(token);
  if (to.meta.requiresAuth) {
   if (token) {
      next();
   } else {
    next({
     path: '/Login',
    });
   }
  } else{ 
   next();
  } 
  });
 
 

export default router;
