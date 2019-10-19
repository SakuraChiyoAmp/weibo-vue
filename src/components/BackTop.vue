<template>
 <!-- <button id="to-top-btn" style="position:fixed;right:0;bottom:0" @click="top(window)">回到顶部</button> -->
   <div id="to-top-btn" style="position:fixed;right:0;bottom:0"><el-button type="primary" @click="top(window)">返回顶部</el-button></div>
</template>
<script>
export default {
  mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
  methods:{
scrollToTop() {
    let topBtn = document.getElementById('to-top-btn');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let browserHeight = window.outerHeight;
    if (scrollTop > browserHeight) {
          topBtn.style.display = 'block';
    } else {
          topBtn.style.display = 'none';
    }
},
        top: function(target){
                 document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop); 
}
}
</script>