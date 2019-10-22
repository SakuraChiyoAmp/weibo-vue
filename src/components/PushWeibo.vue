<template>
<div id="pushweiboContainer">
  <el-form :label-position="labelPosition" label-width="80px" >
    <div id="PushHeader">发条微博吧</div>
    <div class="PushItem">
    <el-input  type="textarea"
  :rows="2"
  placeholder="发条微博吧" v-model="textarea"></el-input>
 </div>
   <el-form-item>
     <el-upload
      class="upload-demo"
      action="#"
       ref="upload"  
    :auto-upload="false"
     :multiple="true"
     :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
   </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
  </el-form-item>
 </el-form>
 </div>
</template>
<script>

  export default {
    data() {
      return {
        labelPosition: 'right',
        textarea:"",
        fileList:[]
      };
    },
    methods:{
      submitForm(){
             if (this.textarea.length==0){
               alert("输入内容不能为空")
             }else{
                 const fileArray = this.$refs.upload.uploadFiles;
            console.log(fileArray);
            var fd = new FormData();
            for(let i = 0; i < fileArray.length; i++) {
                fd.append('avatar', fileArray[i].raw);            
            }
            console.log(fd.getAll("avatar"));
        const data={UserName:this.$store.state.UserName,Content:this.textarea};
      this.$axios({
        url:"http://47.97.190.96:3000/PushWeibo",
        method:"post",
        data:fd,
        params:data,
      }).then(result=>{ 
        alert(result.data.state);
        this.textarea="";
        this.$refs.upload.uploadFiles=[];
      })
   }
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }

    }
  }
</script>
<style lang="css">
#PushHeader{
   margin-bottom: 20px;
   width: 100%;
   font-weight: bold;
   font-size: 50px;
}
  #pushweiboContainer{
    width: 1300px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 10px 10px 5px #888888;
    margin-bottom: 30px;
    padding: 5px;
  }
</style>