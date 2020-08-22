<template>
  <el-container class="home">
    <!-- 左 -->
    <el-aside width="200px">
      <h3 @click="$router.push('/')">新闻头条</h3>
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/postlist">
          <i class="el-icon-menu"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/postpublish">
          <i class="el-icon-setting"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 上 -->
      <el-header>
        <img :src="user.head_img | handelSrc" alt />
        <span>{{ user.nickname }}</span>
        <a href="javascript:;" @click="loginOut">退出</a>
      </el-header>
      <!-- 中 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },

  created() {
    // 获取用户信息
    const user = JSON.parse(localStorage.getItem('user'))
    this.user = user
  },

  methods: {
    // 退出
    async loginOut() {
      try {
        await this.$confirm('确定退出吗', '温馨提示', {
          type: 'warning'
        })
        // 确定退出
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.$router.push('/login')
        this.$message('您已退出')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-header {
    line-height: 60px;
    text-align: right;
    background-color: #434a50;
    color: #fff;
    img {
      margin-bottom: 4px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 15px;
    }
    span {
      margin-right: 15px;
      font-size: 14px;
    }
    a {
      color: #e9eef3;
    }
  }
  .el-aside {
    background-color: #545c64;
    h3 {
      height: 60px;
      cursor: pointer;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
      color: #fff;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background: #e9eef3;
  }
}
</style>
