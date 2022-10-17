<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-10-17 09:12:03
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-17 15:59:15
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\views\MyView\MyView.vue
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div>
    <bannerView :imgUrl="this.img" :titleName="this.title"></bannerView>
    <el-descriptions class="margin-top" title="当前用户信息" :column="3" border>
      <template slot="extra">
        <el-button type="primary" size="small" @click="dialogVisible = true"
          >修改信息</el-button
        >
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ this.user }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-view"></i>
          密码
        </template>
        {{ this.pass }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          当前权限
        </template>
        <el-tag size="small">{{ this.rootId }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="form-info"
        label-width="100px"
      >
        <el-form-item label="当前用户名:" prop="name">
          <el-input placeholder="请输入新用户名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="当前密码:" prop="oldpass">
          <el-input
            placeholder="请输入原来的密码"
            v-model.number="form.oldpass"
          ></el-input>
        </el-form-item>
        <el-form-item style="display: block; text-align: right">
          <el-button type="primary" @click="handleSave">立即修改</el-button>
          <el-button @click="dialogVisible = false">取消修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <footerView></footerView>
  </div>
</template>

<script>
import { Change } from "@/api/user";
import bannerView from "@/components/bannerView/index.vue";
import footerView from "@/components/footerView/index.vue";
export default {
  data() {
    return {
      user: "",
      pass: "",
      rootId: "",
      dialogVisible: false,
      img: require("@/assets/yq5.jpg"),
      title: "我的",
      form: {
        id: "",
        name: "",
        oldpass: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        oldpass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ],
      },
    };
  },
  mounted() {
    this.getUserInfo();
  },
  components: { bannerView, footerView },
  methods: {
    getUserInfo() {
      const root = localStorage.getItem("rootId");
      this.user = localStorage.getItem("user");
      this.pass = localStorage.getItem("pass");
      this.form.id = localStorage.getItem("id");
      this.form.name = localStorage.getItem("user");
      this.form.oldpass = localStorage.getItem("pass");
      if (root == 1) {
        this.rootId = "普通用户";
      } else {
        this.rootId = "管理员";
      }
    },
    handleSave() {
      Change(this.form).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.$message.success("修改成功！");
          this.dialogVisible = false;
          localStorage.setItem("user", this.form.name);
          localStorage.setItem("pass", this.form.oldpass);
          this.getUserInfo();
        }
      });
    },
  },
};
</script>

<style>
.margin-top {
  width: 80%;
  margin: 100px auto;
}
</style>