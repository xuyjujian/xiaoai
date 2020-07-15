<template>
  <div class="box df jc_c ai_c">
    <div class="df box1">
      <el-col :span="8">
        <el-card shadow="always">
          <div class="flx df jc_b mr">
            <span class="iconfont icon-duoren" style="color: green;"></span>
            <div>
              <div class="mb">New Visits</div>
              <div class="mt count"><countTo :startVal='startVal' :endVal='count.visits' :duration='3000'></countTo></div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <div class="flx df jc_b">
            <span class="iconfont icon-tianjiadui" style="color: blue;"></span>
            <div>
              <div class="mb">messagess</div>
              <div class="mt count"><countTo :startVal='startVal' :endVal='count.messages' :duration='3000'></countTo></div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <div class="flx df jc_b">
            <span class="iconfont icon-renminbi" style="color: red;"></span>
            <div>
              <div class="mb">purchases</div>
              <div class="mt count"><countTo :startVal='startVal' :endVal='count.purchases' :duration='3000'></countTo></div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <div class="flx df jc_b">
            <span class="iconfont icon-gouwuche1" style="color:orange;"></span>
            <div>
              <div class="mb">New shopping</div>
              <div class="mt count"><countTo :startVal='startVal' :endVal='count.shopping' :duration='3000'></countTo></div>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
 import countTo from 'vue-count-to';
export default {
  name: "",
  props: {
    count: {
      type: Object
    }
  },
  components: {
     countTo
  },
  data() {
    return {
      startVal: 0,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  padding: 30px 15px;
  .box1 {
    width: 100%;
    
  }
  .el-col {
    margin: 0 20px;
  }
  
}
span{
  width: 70px;
  height: 70px;
  font-size: 70px;
}
.count>span{
  font-size:30px;
}
</style>