const path = require('path')
const { mainModule } = require('process')

module.exports = {
  // 使用 src/main.js 会报错
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // less-loader 版本不能太高，对于 webpack 5.74.0 ，安装命令为 yarn add less-loader@6 -D
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 使用 yarn add -D sass-loader sass 安装
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // yarn add -D stylus stylus-loader
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  plugins: [

  ],
  mode: "development"
}
