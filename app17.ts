
// 三斜线指令 引入文件， 跟reference 联用,  使用三斜线指令时，app17.2 里面的命名空间不需要使用 export 暴露了， 跟app16-2（import）对比， 
///<reference path="./app17-2.ts" />

// console.log(AF.a);    // 1




// 还可以引入声明文件， 比如安装了 npm install @type/node -D
// ///<reference types="node" />                /* 这样的方式会自动去 node_module 下 去找 @type/node */

// 还有其他属性 lib ...
// ///<reference lib="" />                