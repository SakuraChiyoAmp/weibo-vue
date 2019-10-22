<template>
  <div id="LoginContainer">
    <div id="LoginContainer_Top">登录</div>
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
       <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="pass">
       <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
       </el-form-item>
   
      
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
    
     
    </el-form>
    <div id="LoginBlank"></div>
    <router-link  to="/SignUp">
            <el-button type="primary">还未注册?</el-button>
    </router-link>
   </div>
  </div>
</template>
<script>
import PostMsg from "../PostInterface"
  export default {
    data() {
      var validateUsername=(rule,value,callback)=>{
            if (value === ''){
                    callback(new Error("请输入用户名"));
            }else{
              var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if (reg.test(value))
                {
                    callback(new Error("用户名不能带有中文字符"));
                }else
                {
                  callback();
                }
               
            }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          pass: '',       
        },
        rules: {
          username:[
            {validator:validateUsername,trigger:'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            PostMsg.Login(this.ruleForm.username,this.ruleForm.pass).then(result=>{
               console.log(result);
               console.log(result.data); 
               if (result.data.state=="failed"){
                 alert("该用户已经登录或者密码错误或者还没注册!")
               }else{
                 this.$store.dispatch('UserLogin', result.data.token);
                 this.$store.dispatch('UserName', this.ruleForm.username);
                 this.$router.push("/MainPage");
               }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      console.log(this.$store.UserName);
      if (this.$store.state.token!=null){
        this.$router.push({path:'/MainPage'});
      }
    }
  }
</script>
<style lang="css" scoped>
   #LoginContainer{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-content: center;
   }
   #LoginContainer_Top{
     width: 100%;
     height: 100px;
     font-weight: bold;
     font-size: 50px;
   }
   #LoginBody{
       display: flex;
       align-items: center;
       justify-content: center;
   }
   #LoginBlank{
     width: 100%;
     height: 50px;
   }
</style>