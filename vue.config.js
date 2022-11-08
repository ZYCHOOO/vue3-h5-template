// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'static',
  // index.html 的输出路径
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    before: () => {}
  },
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        prependData: `
          @import "~@/styles/mixins.scss";
          @import "~@/styles/variables.scss";
        `
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
