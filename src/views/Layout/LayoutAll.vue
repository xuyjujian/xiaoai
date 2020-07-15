<template>
  <div>
    <el-container>
      <el-header>
        <Hearder :user='user' v-if="user!==''"></Hearder>
      </el-header>
      <el-container>
        <el-aside width="200px" ><Aside></Aside></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Hearder from "../../components/layout/Header";
import Aside from "../../components/layout/Aside";
export default {
  name: "",
  props: {},
  components: {
    Hearder,
    Aside
  },
  data() {
    return {
        user:{}
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.user.username);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}
.el-header{
    padding: 0 !important;
}
.el-main{
  background-color: rgb(238,240,243);
}
</style>