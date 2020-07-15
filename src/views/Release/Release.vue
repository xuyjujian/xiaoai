<template>
  <div>
    <div class="box">
      <el-button type="success" class="ml" @click="see">查看</el-button>
      <el-button type="primary" class="mr" @click="release">发布</el-button>
    </div>
    <el-col :span="8">
      <el-card shadow="never">
        <div class="wt">
          <el-form :model="form" :rules="rules" ref="form" label-width="90px">
            <el-form-item label="文章标题" prop="title" width="300">
              <el-input v-model="form.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="文章摘要" prop="abstract" width="300">
              <el-input v-model="form.abstract" placeholder="请输入文章摘要"></el-input>
            </el-form-item>

            <div class="df jc_b">
              <el-form-item label="作者" prop="author">
                <el-input v-model="form.author"></el-input>
              </el-form-item>
              <el-form-item label="类目" prop="category">
                <el-select v-model="form.category" placeholder="请选择">
                  <el-option label="Vue" value="Vue"></el-option>
                  <el-option label="React" value="React"></el-option>
                  <el-option label="Node.js" value="Node.js"></el-option>
                  <el-option label="性能优化" value="性能优化"></el-option>
                  <el-option label="JavaScript" value="JavaScript"></el-option>
                  <el-option label="小程序" value="小程序"></el-option>
                  <el-option label="工具类" value="工具类"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="来源" prop="source">
                <el-select v-model="form.source" placeholder="请选择">
                  <el-option label="原创" value="原创"></el-option>
                  <el-option label="转载" value="转载"></el-option>
                  <el-option label="与他人合作" value="与他人合作"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="重要性" prop="star">
                <el-select v-model="form.star" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                  <el-option label="3" value="3"></el-option>
                  <el-option label="4" value="4"></el-option>
                  <el-option label="5" value="5"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="发表时间" prop="date">
                <div class="block">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  placeholder="选择日期时间"
                  align="right"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </div>
              </el-form-item>
              
            </div>
          </el-form>
        </div>
        <div id="app">
          <mavon-editor v-model="text" />
        </div>
      </el-card>
    </el-col>
    <div class="wt ai_c jc_c df">
      <el-button type="primary" @click="release">发布</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs"
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      text: "",
      
      form: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        date: "",
      },
      rules: {
        title: [{ required: true, message: "不能为空", trigger: "blur" }],
        abstract: [{ required: true, message: "不能为空", trigger: "blur" }],
        author: [{ required: true, message: "不能为空", trigger: "blur" }],
        category: [{ required: true, message: "不能为空", trigger: "blur" }],
        source: [{ required: true, message: "不能为空", trigger: "blur" }],
        star: [{ required: true, message: "不能为空", trigger: "blur" }],
        date: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  methods: {
    see(){
       this.$router.push('/published')
    },
    release() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log("qq",dayjs(this.form.date).format("YYYY-MM-DD"))
          axios
            .post("/api/article/create", {
              title: this.form.title,
              text: this.text,
              abstract: this.form.abstract,
              author: this.form.author,
              category: this.form.category,
              source: this.form.source,
              star: this.form.star,
              date: this.form.date
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("发布成功");
                this.$router.push("/");
              } else if (res.data.code === 500) {
                this.$message.error("发布失败请检查");
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col {
  width: 100%;
}
.el-input {
  width: 90%;
}
.el-form-item__content {
  width: 500px;
}
.box {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  background-color: #59a586;
}
</style>