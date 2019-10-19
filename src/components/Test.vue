<template>
  <div>
       <!-- <regist> </regist> -->
       <signup></signup>
      <!-- <ImageUpload> </ImageUpload> -->
  </div>
</template>
<script>
import Test from "../../src/test"
import ImageUpload from "../components/ImageUpload"
import regist from "../components/regist"
import signup from "../components/SignUp"
export default {
  components:{
ImageUpload,
regist,
signup
  },
  methods: {
      Show(){
         Test.show();
      }
  },
}
</script>