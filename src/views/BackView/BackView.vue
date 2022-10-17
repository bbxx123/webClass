<template>
  <div class="bgBox1">
    <el-menu
      default-active="/userRoot"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
      background-color="#393d49"
      text-color="#fff"
    >
      <el-submenu index="userRoot">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">网站信息管理</span>
        </template>
        <el-menu-item index="/userRoot" route="/userRoot"
          >用户管理</el-menu-item
        >
        <el-menu-item index="/inputRoot">留言管理</el-menu-item>
        <el-menu-item index="/about">退出后台</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="contentBox">
      <transition
        class="auto-scroll"
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInUp animate__slow"
        leave-active-class="animate__fadeOutDownBig contron"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
.bgBox1 {
  display: flex;
  flex-wrap: nowrap;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 12%;
  height: 100vh;
}

.contentBox {
  width: 88%;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>