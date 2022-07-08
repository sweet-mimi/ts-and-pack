


// const a = 1;          // 报错， a在 app16.ts 定义过了
// 解决方式，如我之前的文件中一样， 加一个 function 包裹，匿名函数自执行， 相当于加一个作用域

// es6 及 ts 中解决
// 第一种加 export 导出
// export const a = 1; 

// 第二种使用命名空间
// namespace B {
//     export const a = 2
// }

// 抽离命名空间  将 B 导出， 可以在其他地方导入
export namespace B {
    export const a = 2;
}