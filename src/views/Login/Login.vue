<template>
  <div class="df jc_c ai_c fd_c bgc">
    <el-card class="box-card">
      <div slot="header" class="clearfix tex">欢迎来到小爱后台管理系统</div>
      <div class="text">
        <div style="width:500px;">
          <el-form :model="form" label-width="100px" status-icon :rules="rules" ref="form">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <div class="df jc_b ai_c">
              <el-form-item label="验证码" prop="code">
                <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
              </el-form-item>
              <div v-html="this.code1" @click="code"></div>
            </div>
            <el-form-item>
              <el-button type="primary" style="width:45% " @click="login">立即登录</el-button>
              <el-button type="primary" style="width:45% " @click="rsgister">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    let checkUsername = (rule, value, callback) => {
      if (typeof value !== "string") {
        callback(new Error("请输入字符"));
      }
      callback();
    };
    return {
      code1: "",
      form: {
        username: "",
        password: "",
        // email: "",
        code: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "用户名在2~8位", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码在6~15位", trigger: "blur" }
        ],
        Verification: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]

        // email: [
        //   { required: true, message: "邮箱不能为空", trigger: "blur" },
        //   { type: "email", message: "请输入正确邮箱", trigger: "blur" }
        // ]
      }
    };
  },
  methods: {
    code() {
      axios
        .get("/api/captcha")
        .then(res => {
          if (res.data) {
            this.code1 = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: this.form.username,
              password: this.form.password,
              code: this.form.code
            })
            .then(res => {
              if (res.data.code === 200) {
                let nowtime = dayjs().format("YYYY年MM月DD日  HH时mm分ss秒");
                this.$message.success(res.data.message);
                let user = {
                  username: this.form.username,
                  password: this.form.password,
                  time: nowtime
                };
                console.log(user);
                sessionStorage.setItem("user", JSON.stringify(user));
                this.$router.push("/");
              } else if (res.data.code === 1) {
                this.$message.warning(res.data.message);
                this.form.code = "";
                axios
                  .get("/api/captcha")
                  .then(res => {
                    if (res.data) {
                      this.code1 = res.data;
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else if (res.data.code === 500) {
                this.$message.error(res.data.message);
                this.form.password = "";
                this.form.code = "";
                axios
                  .get("/api/captcha")
                  .then(res => {
                    if (res.data) {
                      this.code1 = res.data;
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("错误");
          this.form.username = "";
          this.form.password = "";
        }
      });
    },
    rsgister() {
      this.$router.push("/register");
    }
  },
  mounted() {
    axios
      .get("/api/captcha")
      .then(res => {
        if (res.data) {
          this.code1 = res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bgc {
  width: 100vw;
  height: 100vh;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594272023096&di=77e416f194fd46ab9e60fa0f9eeaf35d&imgtype=0&src=http%3A%2F%2Fwww.waibao123.com%2FUploads%2Fphoto%2F2014-07-04%2F672faa193b52a51505d641027081f5b4_big.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.text {
  font-size: 14px;
}
</style>