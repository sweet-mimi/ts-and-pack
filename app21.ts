/*
    使用rollup构建ts项目， 打包后体积小， 具体见rollup 目录下
    安装依赖
    1.全局安装rollup npm install rollup-g

    2.安装TypeScript   npm install typescript -D

    3.安装TypeScript 转换器 npm install rollup-plugin-typescript2 -D

    4安装代码压缩插件 npm install rollup-plugin-terser -D

    5 安装rollupweb服务 npm install rollup-plugin-serve -D

    6 安装热更新 npm install rollup-plugin-livereload -D

    7引入外部依赖 npm install rollup-plugin-node-resolve -D

    8安装配置环境变量用来区分本地和生产  npm install cross-env -D

    9替换环境变量给浏览器使用 npm install rollup-plugin-replace -D

    8的安装是为了配置环境变量： 在 dev启动 和 build打包里配置  cross-env NODE_ENV=development cross-env NODE_ENV=produaction 
*/

/*
    使用webpack构建ts项目， 具体见 webpack 目录下
    安装依赖

    安装webpack   npm install webpack -D

    webpack4以上需要 npm install  webpack-cli -D

    编译TS  npm install ts-loader -D

    TS环境 npm install typescript -D

    热更新服务 npm install  webpack-dev-server -D

    HTML模板 npm install html-webpack-plugin -D
    
*/