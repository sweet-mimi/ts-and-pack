
const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    devServer: {              // 微服务
        port: 1901,
        proxy: {

        }
    },

    resolve: {
        extensions: ['.js', '.ts']      //  匹配后缀， import 引入的时候查找
    },

    plugins: [
        new HtmlWebpackPlugin({                  // 插件 热更新
            template: './public/index.html'
        })
    ]
}