<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-10-17 08:33:42
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-18 10:12:18
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\views\LoginView\LoginView.vue
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div>
    <h1 class="loginTitle">欢迎来到 医 · 者 登录界面</h1>
    <div class="loginBox">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="loginform"
        label-width="100px"
      >
        <el-form-item label="用户：" prop="name">
          <el-input v-model="form.name" placeholder="请输入账户"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="word">
          <el-input
            v-model.number="form.word"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item style="width: 800px">
          <el-button @click="back">返回</el-button>
          <el-button type="success" @click="goRegister">去注册</el-button>
          <el-button type="primary" @click="submitForm(form)" class="loginBtn"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Login } from "@/api/user.js";
export default {
  data() {
    return {
      form: {
        name: "",
        word: "",
      },
      userStatus: false,
      passStatus: false,
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        word: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ],
      },
    };
  },
  mounted() {
    localStorage.removeItem("id");
    localStorage.removeItem("rootId");
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    localStorage.removeItem("address");
            localStorage.removeItem("email");
            localStorage.removeItem("birth");
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    submitForm(formName) {
      Login().then((res) => {
        console.log(res);
        res.data.forEach((item) => {
          if (item.username === this.form.name) {
            this.userStatus = true;
            if (item.password === this.form.word) this.passStatus = true;
            localStorage.setItem("id", item.id);
            localStorage.setItem("rootId", item.rootId);
            localStorage.setItem("user", item.username);
            localStorage.setItem("pass", item.password);
            localStorage.setItem("address", item.address);
            localStorage.setItem("email", item.email);
            localStorage.setItem("birth", item.birth);
          }
        });
        if (this.userStatus && this.passStatus) {
          this.$message.success("登陆成功！");
          this.$router.push("/about");
        } else {
          this.$message.error("账号或密码错误！请重新登录！");
        }
      });
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.loginBtn {
  margin-left: 350px;
}
.loginform {
  margin-top: 20px;
  width: 560px;
}
.loginTitle {
  margin-top: 20px;
  margin-bottom: 50px;
}
.loginBox {
  width: 600px;
  background: url("@/assets/loginbg.png");
  background-size: cover;
  border: 1px solid#ccc;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}
</style>>