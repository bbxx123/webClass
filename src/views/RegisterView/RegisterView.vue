<template>
  <div>
    <h1 class="loginTitle">欢迎来到 医 · 者 注册界面</h1>
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
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="form.pass"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            placeholder="请再次输入密码"
            v-model="form.checkPass"
          ></el-input>
        </el-form-item>
        <el-form-item style="width: 800px">
          <el-button @click="back">返回</el-button>
          <el-button type="success" @click="goLogin">去登录</el-button>
          <el-button
            type="primary"
            @click="submitForm(form)"
            class="registerBtn"
            >立即注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Register } from "@/api/user";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        pass: "",
        checkPass: "",
      },
      // addform: {
      //   username: this.form.name,
      //   password: this.form.pass,
      // },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    submitForm(formName) {
      Register({ username: this.form.name, password: this.form.pass }).then(
        (res) => {
          console.log(res, "res");
          if (this.form.name === "" && this.form.pass === "") {
            this.$message.error("请输入账号或密码");
          } else if (this.form.pass !== this.form.checkPass) {
            this.$message.error("两次密码不一致，请重新输入");
          } else if (res.status === 200) {
            this.$message.success("注册成功！正在前往登录页");
            this.$router.push("/login");
          }
        }
      );
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
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
  //   background: pink;
  background: url("@/assets/registerbg.png");
  border: 1px solid#ccc;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}
</style>>