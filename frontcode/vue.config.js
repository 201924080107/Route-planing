const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
},)
module.exports = {
  devServer: {
      port: 3000,
      open: true,
      hot: true,//自动保存
    },
}
