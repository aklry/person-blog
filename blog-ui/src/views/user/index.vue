<template>
  <Layout>
    <template #NavMenu>
      <NavMenu />
    </template>
    <template #userInfo>
      <div class="search">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" style="width: 200px;" />
        <el-button size="mini" @click="handleSearch()">搜索</el-button>
      </div>
    </template>
    <template #main>
      <el-menu default-active="/info" class="el-menu-vertical-demo" router background-color="#fff" text-color="#999"
        active-text-color="#CD7F32" mode="vertical" style="width: 200px;">
        <el-menu-item index="/info">
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="/changePassword">
          <span slot="title">密码修改</span>
        </el-menu-item>
        <el-menu-item index="/changeName">
          <span slot="title">昵称修改</span>
        </el-menu-item>
        <el-menu-item index="/changeAvatar">
          <span slot="title">上传头像</span>
        </el-menu-item>
      </el-menu>
    </template>
    <template #content>
      <div class="content">
        <img src="@/assets/bg.jpg" alt="">
        <router-view />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import NavMenu from '@/components/NavMenu.vue'
import userMixin from '@/mixins/user'
export default {
  mixins: [userMixin],
  components: {
    Layout,
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background-color: rgb(233, 236, 245) !important;
}


.el-menu {
  float: left;
  margin: 80px 200px;
}

.content {
  float: right;
  position: absolute;
  top: 10%;
  left: 30%;

  img {
    width: 600px;
    height: 300px;
  }
}
</style>