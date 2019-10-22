import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        token:window.sessionStorage.getItem("token"),
        UserName:window.sessionStorage.getItem("UserName")
  },
  mutations: {
         LOGIN:(state,data)=>{
           state.token=data;
           window.sessionStorage.setItem("token",data);
         },
         LOGOUT:(state)=>{
           state.token=null;
           window.sessionStorage.removeItem("token");
           state.UserName="";
           window.sessionStorage.removeItem("UserName");
         },
         USERNAME:(state,data)=>{
           state.UserName=data;
           window.sessionStorage.setItem("UserName",data);
         }
  },
  actions: {
     UserLogin({commit},data){
       commit("LOGIN",data);
     },
     UserLogout({commit}){
       commit("LOGOUT");
     },
     UserName({commit},data){
       commit("USERNAME",data);
     }
  }
})
