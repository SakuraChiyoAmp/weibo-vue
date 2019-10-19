import axios from "axios"
import store from "./store"
 var PostMsg=axios.create({
     timeout:5000,
     headers:{ 'Content-Type': 'application/json;charset=UTF-8' },
     withCredentials: true,
 });
PostMsg.interceptors.request.use(
    config => {
   if (store.state.token) {
    config.headers.Authorization = `token ${store.state.token}`;
   }
   return config;
  }
 );


PostMsg.interceptors.response.use(response=>{
  return response;
},error=>{
  if(error.response){
    switch(error.response.status){
      case 401:
          store.state.UserName=null; 
          store.state.token=null;
        alert("您的会话已经超时，请重新登陆");
        this.$router.replace("/Login")
    }
  }
})

 export default{
     Login(UserName,Password){
       return PostMsg.post("http://localhost:3000/Login",{UserName:UserName,Password:Password});
     },
     Comment(UserName,Content,Id){
      return PostMsg.post("http://localhost:3000/Comment",{UserName:UserName,Content:Content,Id:Id});
     },
     Focus(UserName,OtherUserName,FocusFlag){
       return PostMsg.post("http://localhost:3000/Focus",{UserName:UserName,OtherUserName:OtherUserName,FocusFlag:FocusFlag});
     },
     ZanFlagChange(UserName,Id,DianzanFlag){
       return  PostMsg.post("http://localhost:3000/Dianzan",{UserName:UserName,Id:Id,DianzanFlag:DianzanFlag});
     },
     LogOut(UserName){
      return PostMsg.post("http://localhost:3000/LogOut",{UserName:UserName});
     }

 }