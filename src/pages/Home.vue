<template>
  <el-container class="home">
    <!-- 左 -->
    <el-aside width="200px">
      <h3>新闻头条</h3>
    </el-aside>
    <el-container>
      <!-- 上 -->
      <el-header>
        <img src="~assets/01.jpg" alt />
        <span>nickname</span>
        <a href=":javascript;">退出</a>
      </el-header>
      <!-- 中 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-header {
    line-height: 60px;
    text-align: right;
    background-color: #b3c0d1;
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 15px;
    }
    span {
      margin-right: 15px;
      font-size: 14px;
    }
  }
  .el-aside {
    background-color: #d3dce6;
    h3 {
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
    }
  }
  .el-main {
    background: #e9eef3;
  }
}
</style>
