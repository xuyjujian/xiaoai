<template>
  <div class="Head df jc_c">
    <div class="box df jc_b">
      <div>欢迎{{user.username}}来到小爱后台管理系统</div>
      <div class="df box1">
        <div>
            <div v-if="this.hours>=6&&this.hours<12">早上好,</div>
            <div v-if="this.hours>=12&&this.hours<14">中午好,</div>
            <div v-if="this.hours>=14&&this.hours<18">下午好,</div>
            <div v-if="this.hours>=18&&this.hours<24">晚上好,</div>
            <div v-if="this.hours>=0&&this.hours<6">您该睡觉了</div>
        </div>
        <div>亲爱的{{user.username}}</div>
        <div>登录时间{{user.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {
    user: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      hours: ""
    };
  },
  methods: {},
  mounted() {
    this.hours = dayjs().hour();
    console.log(this.hours);
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
.Head {
  width: 100%;
  height: 60px;
  background-color: #295c87;
  .box {
    width: 95%;
    color: white;
    height: 60px;
    line-height: 60px;
  }
  .box1 div{
      margin-left: 10px !important;
  }
}
</style>