
// import axios from 'axios'          // 没报错直接使用
// axios.get()
// axios.post()
// axios 能直接使用，是因为 在axios 包里 有 .d.ts 这样的声明文件， 里面定义好了需要使用的东西， 然后通过 declare 声明 再导出

// import express from 'express'      // 报错，不能直接使用
// 原因是express没有定义声明文件，所以 ts中不能直接使用，解决办法 ① 自己定义一个声明文件 要么 ② npm i @types/express 安装一个声明文件
// 自己定义一个声明文件 express.d.ts , 然后就可以正常使用了
express()                  // 可以使用，自定义的声明文件生效了
// 第二种 安装@types/express , 这些比较老的工具， 声明文件都是后来写的，在社区里，需要自行安装下
// 安装完去 tsconfig.json 中配置一下 "allowSyntheticDefaultImport": true  ,  这样就可以 正常导入了