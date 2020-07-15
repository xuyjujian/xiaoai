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
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>-->
            <el-form-item>
              <el-button type="primary" style="width:45% " @click="rsgister">立即注册</el-button>
              <el-button type="primary" style="width:45%" @click="login">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
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
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        // email: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "用户名在2~8位", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 15, message: "密码在6~15位", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "两次输入密码不一致", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
        // email: [
        //   { required: true, message: "邮箱不能为空", trigger: "blur" },
        //   { type: "email", message: "请输入正确邮箱", trigger: "blur" }
        // ]
      }
    };
  },
  methods: {
    rsgister() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios
            .post("/api//user/register", {
              username: this.form.username,
              password: this.form.password
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success(res.data.message);
              } else if (res.data.code === 1) {
                this.$message.warning(res.data.message);
                this.form.username = "";
                this.form.password = "";
                this.form.checkPass = "";
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("验证错误");
          this.form.username = "";
          this.form.password = "";
          this.form.checkPass = "";
        }
      });
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
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