// const { defineConfig } = require('@vue/cli-service')

let proxyObj = {}

proxyObj['/'] = {
  //websocket
  ws: false,
  //目标地址
  target: 'http://localhost:8081',
  //发送请求头host会被设置target
  changeOrigin: true,
  //不重写请求地址
  pathReWrite: {
    '^/': '/'
  }
}
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8800,
    // proxy: {
    //   '/': {
    //     //websocket
    //     ws: false,
    //     //目标地址
    //     target: 'http://loclhost:8081',
    //     //发送请求头host会被设置target
    //     changeOrigin: true,
    //     //不重写请求地址
    //     pathReWrite: {
    //       '^/': '/'
    //     }
    //   }

    // }
    proxy: proxyObj
  }
}
