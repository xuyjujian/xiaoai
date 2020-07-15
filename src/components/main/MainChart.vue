<template>
<div class="mb">
   <el-row :gutter="12">
 <el-col :span="8">
    <el-card shadow="always">
<ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-card>
  </el-col>
   </el-row>
  </div>
</template>

<script>
 export default {
   name: '',
   props: {
       chat:{
          type:Array
       }
   },
   components: {

   },
   data () {
        this.chartSettings = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
      }
     return {
  chartData: {
          columns: ['date', 'expected', 'actual'],
          rows: []
        }
     }
   },
   methods: {

   },
   mounted() {
       this.chartData.rows= this.chat
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.el-col{
    width: 100%;

}
</style>