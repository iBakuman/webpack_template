const path = require('path')
const { mainModule } = require('process')

module.exports = {
  // 使用 src/main.js 会报错
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),// 所有文件输出的根目录
    filename: "static/js/main.js",// 入口文件打包后输出的位置：为文件输出根目录 + 此处定义的路径。
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
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于 10 K 的图片使用 base64 编码成字符串
          }
        },
        generator: {
          // 输出图片的位置，相对于上面配置的根目录
          // [hash:10] 表示取 hash 值的前十位作为文件名
          filename: "static/images/[hash:10][ext][query]"
        }
      }
    ]
  },
  plugins: [

  ],
  mode: "development"
}
