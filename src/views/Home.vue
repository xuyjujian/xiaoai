<template>
  <div>
    <Mainhead :count="count"></Mainhead>
    <MainChart :chat="chat" v-if="chat.length>0"></MainChart>
    <Mainpicture
      :chat="chat"
      :ring="ring"
      :radar="radar"
      v-if="chat.length>0&&ring.length>0&&radar.length>0"
    ></Mainpicture>
    <Mainbuttom :order="order" :progress="progress" :todoList="todoList" v-if="order.length>0&&progress.length&&todoList.length>0"></Mainbuttom>
  </div>
</template>

<script>
import axios from "axios";
import Mainhead from "../components/main/Mainhead";
import MainChart from "../components/main/MainChart";
import Mainpicture from "../components/main/Mainpicture";
import Mainbuttom from "../components/main/Mainbuttom";
export default {
  name: "",
  props: {},
  components: {
    Mainhead,
    MainChart,
    Mainpicture,
    Mainbuttom
  },
  data() {
    return {
      count: {},
      chat: [],
      ring: [],
      radar: [],
      order: [],
      progress: [],
      todoList: []
    };
  },
  methods: {
    gethomeData() {
      axios
        .get("/api/homeData")
        .then(res => {
          if (res.data.code === 0) {
            this.count = res.data.data;
            // console.log(this.count);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    gethomeChat() {
      axios
        .get("/api/homeChat")
        .then(res => {
          if (res.data.code === 0) {
            this.chat = res.data.data;
            // console.log(this.chat);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getringChat() {
      axios
        .get("/api/ringChat")
        .then(res => {
          if (res.data.code === 0) {
            this.ring = res.data.data;
            // console.log(this.ring);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getradarChat() {
      axios
        .get("/api/radarChat")
        .then(res => {
          if (res.data.code === 0) {
            this.radar = res.data.data;
            // console.log(this.radar);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getOrder() {
      axios
        .get("/api/orderData ")
        .then(res => {
          if (res.data.code === 0) {
            this.order = res.data.data;
            // console.log(res.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getprogress() {
      axios
        .get("/api/progress ")
        .then(res => {
          if (res.data.code === 0) {
            this.progress = res.data.data;
            console.log(this.progress);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettodoList() {
      axios
        .get("/api/todoList ")
        .then(res => {
          if (res.data.code === 0) {
            this.todoList = res.data.data;
            console.log(this.todoList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.gethomeData();
    this.gethomeChat();
    this.getringChat();
    this.getradarChat();
    this.getOrder();
    this.getprogress();
    this.gettodoList();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>