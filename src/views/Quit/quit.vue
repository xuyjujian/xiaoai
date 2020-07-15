<template>
 <div class="df ai_c jc_c box">
     <div class="box1">
         <h2>期待您下次光临</h2>
         <el-button type="primary" @click="quit">确定退出</el-button>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
       quit(){
           localStorage.removeItem('user')
           this.$router.push('/login')
       }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    width: 80vw;
    height: 80vh;
    .box1{
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>