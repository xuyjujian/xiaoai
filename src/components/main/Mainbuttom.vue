<template>
  <div class="df ai_c mt mb wt">
    <div class="order">
      <el-col :span="8">
        <el-card shadow="always">
          <el-table :data="tableData" style="width: 100% ">
            <el-table-column prop="num" label="Order _No" width="260px"></el-table-column>
            <el-table-column prop="price" label="Price" width="180px"></el-table-column>
            <el-table-column label="status">
              <template slot-scope="scope">
                <div v-if="scope.row.status===0">
                  <el-tag type="danger">pending</el-tag>
                </div>
                <div v-if="scope.row.status===1">
                  <el-tag type="success">success</el-tag>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </div>
    <div class="box">
      <el-col :span="8">
        <el-card shadow="always">
          <div>
            <div class="df jc_b">
              <div v-if="this.Select===false">
                <i class="el-icon-caret-bottom" @click="down"></i>
              </div>
              <div v-if="this.Select===true">
                <i class="el-icon-caret-top" @click="up"></i>
              </div>
              <div>Todo List</div>
            </div>
            <div class="box3">
              <div v-for="(item,index) in this.newArr" :key="index" class="df mt box2">
                <div class="df jc_b close" style="width:360px">
                  <div class="df">
                    <div>
                      <el-checkbox v-model="item.checked" @change="solo"></el-checkbox>
                    </div>
                    <div class="ml">{{item.name}}</div>
                  </div>
                  <div>
                    <span class="el-icon-close" @click="close(item,index)"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="df jc_b">
              <div>{{this.newArr.length}}items left</div>
              <div class="df">
                <div class="flx">
                  <button @click="all">All</button>
                </div>
                <div class="flx">
                  <button @click="active">Active</button>
                </div>
                <div class="flx">
                  <button @click="completed">Completed</button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    <div class="box">
      <el-col :span="8">
        <el-card shadow="always">
          <div class="md">
            <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
          </div>
          <div class="box1">
            <div v-for="(item,index) in progress" :key="index" class="mt">
              <div v-if="item.progress*100===100">
                <el-progress :percentage="item.progress*100" status="success"></el-progress>
              </div>
              <div v-else>
                <el-progress :percentage="item.progress*100"></el-progress>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    order: {
      type: Array
    },
    progress: {
      type: Array
    },
    //数据数组
    todoList: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      tableData: [],
      newArr: [],//显示数组
      Select:false
    };
  },
  methods: {
    all() {
      this.newArr = this.todoList;
    },
    active() {
      this.newArr = this.todoList.filter(item => {
        return !item.checked;
      });
    },
    completed() {
      this.newArr = this.todoList.filter(item => {
        return item.checked === true;
      });
    },
    close(item, index) {
      if(item.checked===true){
        this.newArr.splice(index, 1);
        this.todoList.map((item1,index)=>{
        if(item.name===item1.name){
          this.todoList.splice(index, 1);
        }
      })
      }
      
    },
    down(){
      this.newArr.map(item=>{
        item.checked=true
      })
      this.Select=true
    },
    up(){
       this.newArr.map(item=>{
        item.checked=false
      })
      this.Select=false
    },
    solo(){
      this.Select=this.newArr.every(item=>{
        return item.checked
      })
    }
  },
  mounted() {
    this.tableData = this.order;
    this.newArr = this.todoList;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.order {
  flex: 2;
}
.box {
  flex: 1;
}
.el-col {
  width: 100%;
}
.el-progress {
  height: 30px;
}
.el-card {
  height: 586px;
}
.box1 {
  margin: 50px 0;
}
.box2 {
  height: 50px;
}
.close span {
  opacity: 0;
  color: red;
}
.close:hover span {
  opacity: 1;
}
.box3{
  height: 470px;
}
</style>