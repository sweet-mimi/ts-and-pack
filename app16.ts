/*
es6 任何包含顶级import 或者 export 的文件都被当成一个模块，如果没有，那么内容是全局可见的（对模块也是可见的）
所以 ts 中 也是
*/ 

// 导入B
import { B } from './app16-2'

// const a = 1;

// 使用命名空间    // 底层原理，编译过后看，相当于 包了一层 function , （跟我之前的方式一样，之前文件中可见） 匿名函数自执行， 将 A 当做一个对象传入， 
// 命名空间中 需要在外部访问的都需要使用 export 导出
namespace A {
    export const a = 1;

    // 嵌套命名空间     // function 里包裹 function
    export namespace C {
        export const a = 3;
    }
}

// 输出
console.log(A.a);
console.log(A.C.a);
console.log(B.a);

// 命令空间 起别名 简化
import Q = A.C
console.log(Q.a);              // 但ts-node启动会错误，不认识这样的语法

// namespace 重名会合并

