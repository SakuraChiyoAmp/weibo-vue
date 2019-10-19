import axios from "axios"
import store from "./store"
import router from "./router"
 var GetMsg=axios.create({
     timeout:5000,
     headers:{ 'Content-Type': 'application/json;charset=UTF-8' },
     withCredentials: true,
 });
 GetMsg.interceptors.response.use(response=>{
  return response;
},error=>{
  if(error.response){
    switch(error.response.status){
      case 401:
        alert("您的会话已经超时，请重新登陆");
        store.state.UserName=null;
        store.state.token=null;
        router.push({
          path: `/Login`,
        })
    }
  }
})

GetMsg.interceptors.request.use(
  config => {
 if (store.state.token) {
  config.headers.Authorization = `token ${store.state.token}`;
 }
 return config;
}

);
 

 export default{
     GetMyInfo(UserName){
       return GetMsg.get("http://localhost:3000/GetMyInfo",{params:{UserName}});
     },
     GetOtherInfo(UserName,OtherUserName){
       return GetMsg.get("http://localhost:3000/GetOtherInfo",{params:{UserName,OtherUserName}});
     },
     GetMyPageInfo(UserName){
       return GetMsg.get("http://localhost:3000/GetMyPageInfo",{params:{UserName}});
     },
     GetFreshWeibo(){
      return GetMsg.get("http://localhost:3000/GetFreshWeibo");
    },
    WeiboDetail(UserName,WeiboId,MyUserName){
      return GetMsg.get("http://localhost:3000/WeiboDetail",{params:{UserName,WeiboId,MyUserName}});
    },
    SearchWeibo(Key){
      return GetMsg.get("http://localhost:3000/SearchWeibo",{params:{Key}});
    }
    // GetFreshWeibo(){
    //   return GetMsg.get("http://localhost:3000/GetFreshWeibo");
    // }
 }