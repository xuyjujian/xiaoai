<template>
  <div>
    <el-col :span="12">
      <div v-for="(item,index) in menu" :key="index">
        <el-menu
      router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#344055"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
     menu:[
       {
         name:'首页',
         icon:'el-icon-s-home',
         path:'/'
       },
       {
         name:'已发布',
         icon:'el-icon-s-claim',
         path:'/published'
       },
       {
         name:'统计',
         icon:'el-icon-setting',
         path:'/statistics'
       },
       {
         name:'发表文章',
         icon:'el-icon-upload',
         path:'/release'
       },
       {
         name:'标签页',
         icon:'el-icon-s-comment',
         path:'/label'
       },
       {
         name:'导出excel',
         icon:'el-icon-s-order',
         path:'/paging'
       },
       {
         name:'图片上传',
         icon:'el-icon-picture-outline',
         path:'/pictureupload'
       },
       {
         name:'退出系统',
         icon:'el-icon-s-release',
         path:'/quit'
       },
     ]
    };
  },
  methods: {
   
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo {
  width: 190px;
  height: 70px;
  padding-top: 30px;
}
</style>