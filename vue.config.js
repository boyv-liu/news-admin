const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
} // path.join(__dirname)设置绝对路径

module.exports = {
  devServer: {
    open: true,
    port: 3000,
    overlay: {
      // 关闭遮罩层
      warnings: false,
      errors: false
    }
  },
  // 目录别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('pages', resolve('./src/pages'))
      .set('assets', resolve('./src/assets'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
