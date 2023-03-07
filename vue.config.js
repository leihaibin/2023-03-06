const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: { // 自定义服务配置
      port: 3000, // 修改的端口号
      open: true
    }
    })
