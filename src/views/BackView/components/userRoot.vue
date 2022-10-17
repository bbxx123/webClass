<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-10-17 10:08:18
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-17 11:03:03
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\views\BackView\components\userRoot.vue
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="userBg">
    <h1 class="userTitle">用户管理</h1>
    <!-- <el-button class="addBtn" type="primary">新增用户</el-button> -->
    <el-table :data="tableData" style="width: 100%; margin: 0 auto" border>
      <el-table-column
        label="id"
        property="id"
        align="center"
        min-width="200"
      />
      <el-table-column
        label="用户名"
        property="username"
        align="center"
        min-width="200"
      />
      <el-table-column
        label="密码"
        property="password"
        align="center"
        min-width="250"
      />
      <el-table-column
        label="用户权限 ( 1：普通用户 2：管理员 )"
        property="rootId"
        align="center"
        min-width="200"
      />
      <el-table-column
        label="操作"
        align="right"
        header-align="center"
        min-width="200"
        fixed="right"
      >
        <!-- eslint-disable-next-line -->
        <template slot-scope="scope">
          <div class="table_optionItem">
            <div
              class="mmu_tableBtn blueFont commonBtn"
              @click="
                goaddNew(
                  true,
                  scope.row.id,
                  scope.row.username,
                  scope.row.password,
                  scope.row.rootId
                )
              "
            >
              编辑
            </div>
            <div
              class="mmu_tableBtn redBorder commonBtn"
              @click="delMeetingBook(scope.row.id)"
            >
              删除
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
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
        <el-form-item label="用户名:" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model.number="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户权限:" prop="rootId">
          <el-input
            placeholder="请输入用户权限(1：普通用户 2：管理员)"
            v-model.number="form.rootId"
          ></el-input>
        </el-form-item>
        <el-form-item style="display: block; text-align: right">
          <el-button type="primary" @click="handleSave">立即修改</el-button>
          <el-button @click="dialogVisible = false">取消修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { Login, ChangeUser, DelUser } from "@/api/user";
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        id: "",
        username: "",
        password: "",
        rootId: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "number", message: "密码必须为数字值" },
        ],
        rootId: [
          { required: true, message: "请输入用户权限", trigger: "blur" },
          { type: "number", message: "权限必须为数字值" },
        ],
      },
      tableData: [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      Login().then((res) => {
        this.tableData = res.data;
      });
    },
    goaddNew(type, id, name, pass, rootId) {
      this.form.id = id;
      this.form.username = name;
      this.form.password = pass;
      this.form.rootId = rootId;
      this.dialogVisible = type;
    },
    delMeetingBook(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          DelUser({ id: id }).then((res) => {
            if (res.status === 200) {
              const nowId = localStorage.getItem("id");
              if (nowId == id) {
                this.$message.error("当前账号已被删除！");
                this.$router.push("/");
              } else {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                this.getUser();
              }
            } else {
              this.$message({
                type: "error",
                message: "删除失败!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleSave() {
      ChangeUser(this.form).then((res) => {
        if (res.status === 200) {
          this.$message.success("修改成功！");
          this.dialogVisible = false;
          localStorage.setItem("user", this.form.username);
          localStorage.setItem("pass", this.form.password);
          this.getUser();
        } else {
          this.$message.error("修改失败!");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.addBtn {
  margin: 10px 0 20px -1550px;
}
.userBg {
  overflow: auto;
  /* background: #ccc; */
}
.userTitle {
  margin: 5px 0 20px 5px;
  text-align: left;
}
.table_optionItem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .mmu_tableBtn {
    padding: 2px 8px;
    color: #5c666e;
    border: 1px solid #5c666e;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 4px;
    white-space: nowrap;
    &.blueFont {
      color: #fff;
      background: #2d7df5;
      border: 1px solid #2d7df5;
    }
    &.greenFont {
      color: #fff;
      background: #3ba988;
      border: 1px solid #3ba988;
    }
    &.originFont {
      color: #fff;
      background: #ff8a58;
      border: 1px solid #ff8a58;
    }
    &.colorBorder {
      color: #2d7df5;
      border: 1px solid #2d7df5;
    }
    &.redBorder {
      color: #ef3131;
      border: 1px solid #ef3131;
    }
    &.grayBorder {
      color: #aaa;
      border: 1px solid #aaa;
    }
  }
}
</style>