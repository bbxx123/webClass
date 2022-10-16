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
          <el-button type="primary" @click="submitForm(form)" class="loginBtn"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        word: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        word: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.form);
      this.$router.push("/about");
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