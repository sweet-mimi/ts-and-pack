
/* rollup配置文件 */

import path from 'path'
import ts from 'rollup-plugin-typescript2'       // 因为下面的入口配置的是ts文件， rollup是不认识 ts 的，所以在插件里配置ts
import server from 'rollup-plugin-serve'         // 这个用来启动前端服务的
import livereload from 'rollup-plugin-livereload'      // 热更新插件
import { terser } from 'rollup-plugin-terser'          // 代码压缩， 压缩后需要开启 sourcemap 进行原文件定位, ts 项目中需要在 tsconfig.json 里配置
import replace from 'rollup-plugin-replace'       // 因为浏览器没有 process ,所以将 node 的 process 的环境变量配置给浏览器
const isDev = () => {
    return process.env.NODE_ENV === 'development'
}
export default {
    input: "./src/index.ts",             /*文件入口*/

    output: {                           /*文件出口*/
        file: path.resolve(__dirname, './dist/index.js'),
        format: 'umd',
        sourcemap: true
    },

    plugins: [
        ts(),
        isDev() && livereload(),              // 热更新的    只有开发环境能热更新
        // terser(),               // 代码压缩
        terser({
            // compress: {                  // 代码压缩后的 配置
            //     drop_console: true             // 干掉js中的console
            // }
        }),               
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)    // 把node的环境变量配置到js中
        }),
        isDev && server({                          // 只有开发环境启动服务
            open: true,   // 是否自动打开网页
            openPage: '/public/index.html',
            port: 1900
        })
    ]
}