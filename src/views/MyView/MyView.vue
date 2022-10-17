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
    <el-descriptions
      class="margin-top"
      title="当前用户信息"
      :column="3"
      border
    >
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
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-view"></i>
          密码
        </template>
        1119
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">普通用户</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
    >
        
      <el-form ref="form" :model="form" :rules="rules" class="form-info" label-width="100px">
        <el-form-item label="用户名称:" prop="name">
          <el-input placeholder="请输入新用户名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="原始密码:" prop="oldpass">
          <el-input placeholder="请输入原来的密码" v-model.number="form.oldpass"></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="newpass">
          <el-input placeholder="请输入新密码" v-model.number="form.newpass"></el-input>
        </el-form-item>
        <el-form-item style="display: block; text-align: right">
          <el-button type="primary" @click="handleSave">立即创建</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <footerView></footerView>
  </div>
</template>

<script>
import bannerView from "@/components/bannerView/index.vue";
import footerView from "@/components/footerView/index.vue";
export default {
  data() {
    return {
     
      dialogVisible: false,
      img: require("@/assets/yq5.jpg"),
      title: "我的",
      form:{
        name:'',
        oldpass:'',
        newpass:'',
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        newpass: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ],
        oldpass: [
          { required: true, message: "请输入原来的密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ]
      },
    };
  },
  components: { bannerView, footerView },
  methods: {
    handleSave() {},
  },
};
</script>

<style>
.margin-top {
  width: 80%;
  margin: 100px auto;
}
</style>