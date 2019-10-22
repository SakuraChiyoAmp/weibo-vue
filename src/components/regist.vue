<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.userName"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.password" type="password"></el-input>
  </el-form-item>
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
</template>
<script>

  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          userName: 'userA',
          password: 'passworda',
         
        }, 
        fileList:[]
      };
    },
    methods:{
      submitForm(){
    // 获取到 上传的所有文件，它是一个数组
            const fileArray = this.$refs.upload.uploadFiles;
            // console.log(fileArray);
            // 实例化FormData对象
            var fd = new FormData();
            // 遍历文件数组，将所有文件存入fd中
            for(let i = 0; i < fileArray.length; i++) {
                // 在这里数组每一项的.raw才是你需要的文件，有疑惑的可以打印到控制台看一下就清楚了
                fd.append('avatar', fileArray[i].raw);            
            }
            // console.log(fd.getAll("avatar"));
      // this.$axios.post("http://47.97.190.96:3000/ImageUpload",fd).then(res=>{
      //   console.log(res);
      // }).catch(err=>{
      //   console.log(err);
      // });
        const data=this.formLabelAlign;
      this.$axios({
        url:"http://47.97.190.96:3000/ImageUpload",
        method:"post",
        data:fd,
        params:data,
      })
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