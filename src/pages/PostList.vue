<template>
  <div class="post-list">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table :data="postList" style="width: 90%">
      <el-table-column label="序号" width="60">
        <template v-slot:="obj">
          <p>{{ obj.$index + 1 }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="user.nickname" label="作者"></el-table-column>
      <!-- 当有prop和插槽时，以插槽数据为准 -->
      <el-table-column prop="create_date" label="创建时间">
        <template v-slot="obj">
          <p>{{ obj.row.create_date | time }}</p>
        </template>
      </el-table-column>
      <el-table-column label="封面">
        <template v-slot:default="obj">
          <img :src="obj.row.cover[0].url" alt />
        </template>
      </el-table-column>
      <el-table-column prop="create_date" label="操作">
        <el-button type="info" plain size="small">编辑</el-button>
        <el-button type="danger" plain size="small">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  created() {
    this.getPostList()
  },

  data() {
    return {
      postList: [],
      pageSize: 5
    }
  },
  methods: {
    // 获取文章列表
    async getPostList() {
      const res = await this.$axios.get('/post', {
        params: {
          pageSize: this.pageSize
        }
      })
      // console.log(res)
      const { statusCode, data } = res.data
      if (statusCode == 200) {
        this.postList = data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  .el-table {
    margin-top: 20px;
    img {
      width: 110px;
      height: 60px;
      object-fit: cover;
    }
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
