<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-26 08:54:27
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-27 16:25:29
 * @FilePath: \blog3.0\src\views\BlogView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="aboutBox">
    <bannerView :imgUrl="this.img" :titleName="this.title"></bannerView>
    <div class="inputContent">
      <div class="pop" v-for="(item, index) in inputList" :key="index">
        <div class="arrow"></div>
        {{ item.msg }}
      </div>
    </div>
    <div class="inputBox">
      <el-input
        style="width: 90%"
        v-model="input"
        placeholder="请输入留言信息"
      ></el-input>
      <el-button style="width: 10%" type="primary">发送</el-button>
    </div>
    <footerView></footerView>
  </div>
</template>

<script>
import bannerView from "@/components/bannerView/index.vue";
import footerView from "@/components/footerView/index.vue";
import bannerList1 from "./components/bannerList1.vue";
import bannerList2 from "./components/bannerList2.vue";
import bannerList3 from "./components/bannerList3.vue";
export default {
  name: "BlogView",
  components: { bannerView, footerView, bannerList1, bannerList2, bannerList3 },
  data() {
    return {
      input: "",
      img: "http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/bg17.jpg",
      title: "留言板",
      inputList: [
        {
          msg: "希望疫情快点好起来，大家都能更好的生活",
        },
        {
          msg: "希望疫情快点好起来，大家都能更好的生活1",
        },
        {
          msg: "希望疫情快点好起来，大家都能更好的生活2",
        },
        {
          msg: "希望疫情快点好起来，大家都能更好的生活3",
        },
        {
          msg: "希望疫情快点好起来，大家都能更好的生活4",
        },
      ],
    };
  },
};
</script>

 <style lang="scss">
.pop {
  position: relative;
  top: 30px;
  left: 30px;
  margin-top: 30px;
  width: 300px;
  height: 35px;
  line-height: 33px;
  /*background:#fff;*/
  color: #fff;
  border-radius: 5px; /* 圆角 */
  background-color: #4d4948;
  border: 1px solid #4d4948;
  text-align: center;
  margin-right: 30px;
}
/*尖角在左侧*/
.pop .arrow {
  position: absolute;
  top: 5px;
  left: -16px; /* 圆角的位置需要细心调试哦 */
  width: 0;
  height: 0;
  font-size: 0;
  border: solid 8px;
  border-color: #fff #4d4948 #fff #fff;
}

.aboutBox {
  height: 100%;

  // 背景图片
  // background: url("@/assets/cover.jpg");
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: 110% 100%;
  background-attachment: fixed;
  .inputContent {
    overflow: hidden;
    height: 100vh;
    background: rgb(240, 240, 240);
  }
  .inputBox {
    width: 100%;
    border: 2px solid #ccc;
  }
  .mainBox {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>

