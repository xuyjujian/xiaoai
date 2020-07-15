<template>
  <div>
    <div class="box1">
      <el-link @click="no" class="mr">未读消息({{this.no1.length}})</el-link>
      <el-link @click="yes" class="ml mr">已读消息</el-link>
      <el-link @click="rec" class="ml mr">回收站</el-link>
    </div>
    <div>
      <div>
        <el-col :span="8">
          <el-card shadow="never">
            <div v-for="(item) in this.list" :key="item.id" style="border-bottom: solid 1px lightgray">
              <div class="df jc_b ai_c" style="height:80px">
                <div>{{item.content}}</div>
                <div class="df ai_c">
                  <div class="mr">{{item.time}}</div>
                  <div v-if="num==1">
                    <el-button class="ml mt" @click="readed(item)">标记已读</el-button>
                  </div>
                  <div v-if="num==2">
                    <el-button class="ml mt" @click="del(item)">删除</el-button>
                  </div>
                  <div v-if="num==3">
                    <el-button type="warning" class="ml mt" @click="reduction(item)">还原</el-button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="this.list.length===0" class="tex">暂无数据</div>
            <div v-if="num==1&&this.list.length!==0">
              <el-button type="primary" @click="allreaded">全部已读</el-button>
            </div>
            <div v-if="num==2&&this.list.length!==0">
              <el-button type="info" @click="alldel">全部删除</el-button>
            </div>
            <div v-if="num==3&&this.list.length!==0">
              <el-button type="danger" @click="clear">清空回收站</el-button>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      no1:[],
      num: 1,
      list: [],
      arr: [
        {
          id: 1,
          read: false,
          recycle: false,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          id: 2,
          read: false,
          recycle: false,
          time: "2018-04-19 21:00:00",
          content: "今晚12点整发大红包,先到先得"
        },
        {
          id: 3,
          read: true,
          recycle: false,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          id: 4,
          read: true,
          recycle: true,
          time: "2018-04-19 20:00:00",
          content: "[系统通知]您的优惠券已经过期"
        }
      ]
    };
  },
  methods: {
    no() {
      this.num = 1;
      this.list = this.arr.filter(item => {
        return item.read === false && item.recycle == false;
      });
      this.no1=this.list

    },
    yes() {
      this.num = 2;
      this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == false;
      });
    },
    rec() {
      this.num = 3;
      this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == true;
      });
    },
    readed(item) {
      item.read = true;
      this.list = this.arr.filter(item => {
        return item.read === false && item.recycle == false;
      });
      this.no1=this.list
    },
    del(item) {
      item.recycle = true;
      this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == false;
      });
    },
    reduction(item) {
      item.recycle = false;
      this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == true;
      });
    },
    allreaded() {
      this.list.map(item => {
        item.read = true;
      });
      this.list = this.arr.filter(item => {
        return item.read === false && item.recycle == false;
      });
      this.no1=this.list
    },

    alldel() {
      this.list.map(item => {
        item.recycle = true;
      });
      this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == false;
      });
    },
    clear() {
      this.list.map(item1 => { 
        this.arr.map((item, index) =>{
          if (item.id === item1.id) {
            this.arr.splice(index, 1);
          }
        });
      });
       this.list = this.arr.filter(item => {
        return item.read === true && item.recycle == true;
      });
    }
  },
  mounted() {
    this.list = this.arr.filter(item => {
      return item.read === false && item.recycle == false;
    });
    this.no1=this.list
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-bottom: solid 1px lightgray;
}
.el-col {
  width: 100%;
}
.box2 {
  width: 100%;
  height: 80px;
  border-bottom: lightgray 1px solid;
}
</style>