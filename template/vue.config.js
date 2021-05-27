const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'resources',
          to: './',
          ignore: [".*"]
        }
      ])
    ]
  },
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}