<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:29:56
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-14 11:14:10
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\views\HomeView\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="home">
    <div class="coverBox">
      <div class="centerBox">
        <div class="ahtuorName">欢迎来到 《医·者》 网</div>
        <el-divider class="divider"></el-divider>
        <!-- 内容 -->
        <div class="title" v-for="(v, k) in content" :key="k">
          <typewriter class="str" :str="v"></typewriter>
        </div>
        <!-- 引导按钮 -->
        <div class="btnBox">
          <el-button round @click="clickHome" class="btnStyle">登录</el-button>
          <el-button round class="btnStyle">注册</el-button>
        </div>
      </div>
      <!-- 页脚 -->
      <div class="footerBox">
        &copy; 2022 医·者 <br />
        滇ICP备2022000365号
      </div>
    </div>
  </div>
</template>


<script>
import Popup from "@/components/dialogView/index.vue"; //弹窗组件
import typewriter from "./components/typewriter.vue";
import "./css/HomeView.scss";

export default {
  name: "HomeView",
  components: { Popup, typewriter },
  data() {
    return {
      content: [],
      str: "我是文字",
      //文章内容
      words: [
        "2019年12月16日--至今",
        "人类经历了百年不遇的重大劫难-新冠肺炎疫情",
        "就在这时，涌现出了一波又一波舍己为人的“大白”，他们坚守着保护着我们每一个人",
        "他们奋斗在病毒的一线，一次又一次赌上自己的性命，与死神抢夺每一条生命"
      ],
      dialogVisible: false, // 弹框的出现与否
      dialogTitle: "GitHub", //弹窗标题
    };
  },
  mounted() {
    this.setTime();
  },
  methods: {
    setTime() {
      var arr = this.words;
      var that = this;
      arr.forEach(function (v, k) {
        setTimeout(function () {
          that.content.push(v);
        }, k * 2500);
      });
    },
    updateVisible(val) {
      this.dialogVisible = val;
    },
    // 点击取消的事件
    resetPopupData() {
      //  这里可重置数据
      this.dialogVisible = false;
    },
    // 点击确定的按钮
    async submitPopupData() {
      this.dialogVisible = false;
    },
    // 关闭弹框（头部的X）
    handleClose() {
      this.dialogVisible = false;
    },
    clickHome() {
      this.$router.push("/about");
    },
  },
};
</script>