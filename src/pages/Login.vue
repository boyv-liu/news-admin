<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="70px" :rules="rules">
      <img src="~assets/01.jpg" alt />
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button class="reset" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      // 验证
      rules: {
        username: [
          // 非空验证
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
          },
          // 正则验证
          {
            pattern: /^1\d{4,10}$/,
            message: '账号以1开头的5-11位数字',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          // 非空验证
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          // 正则验证
          {
            pattern: /^\w{3,11}$/,
            message: '密码是3-11位字符',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },

  methods: {
    // 登录
    async login() {
      // 发送请求前先校验
      // this.$refs.form.validate(valid => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      try {
        await this.$refs.form.validate()
        const res = await this.$axios.post('/login', this.form)
        // console.log(res)
        const { statusCode, message, data } = res.data
        if (statusCode === 200) {
          // 本地存token
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          // 跳转
          this.$message({
            type: 'sucess',
            message: '登录成功'
          })
          this.$router.push('/')
        } else {
          this.$message.error(message)
        }
      } catch (err) {
        console.log(err)
      }
    },

    // 重置
    reset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .el-form {
    position: relative;
    width: 400px;
    padding: 80px 80px 30px 60px;
    border: 3px solid #ccc;
    margin: 100px auto;
    img {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #ccc;
    }
    .reset {
      margin-left: 20px;
    }
  }
}
</style>
