(function() {

// 枚举 ,   默认下标从 0 开始
// enum Color {
//     red,
//     green,
//     blue
// }
// console.log(Color.red);       // 0
// console.log(Color.green);    // 1
// console.log(Color.blue);     // 2

// 自定义枚举
// enum Color {
//     red = 4,
//     green = 5,
//     blue = 6
// }
// console.log(Color.red);       // 4
// console.log(Color.green);    // 5
// console.log(Color.blue);     // 6

// 增长枚举
// enum Color {
//     red = 1,
//     green,
//     blue
// }
// console.log(Color.red);       // 1
// console.log(Color.green);    // 2
// console.log(Color.blue);     // 3

// 以上是字符串枚举
// 字符串枚举
enum Color {
    red = 'red',
    // bb,                      // 字符串后面不能这样插入一个，没办法递增
    green = 'green',
    blue = 'blue'
}
console.log(Color.red);       // red
console.log(Color.green);    // green
console.log(Color.blue);     // blue

// 混用
enum Answer {
    yes = 1,
    no = 'no',
}
console.log(Answer.yes);       // 1
console.log(Answer.no);    // no


// 接口枚举
interface A{
    red: Color.red
}

let obj: A = {
    red: Color.red          // 可以这样写
}


// const 枚举
// enum Types {         // 不加const 编译后，Types会是一个对象 
//     success,
//     fail
// }
// 不能以let 或 var 定义，但可以加const 定义
const enum Types {
    success,
    fail
}
let code: number = 0
if(code === Types.success) {

}
/*
    加了const 区别是，编译后的js 文件里 是直接将 success 变成常量 
    var code = 0
    if(code === 0 ){   // 0 就是 success

    }
*/

// 反向映射   key <----> value
// 值为字符串时，无法反向映射
enum Season {
    spring
}

let value: number = Season.spring
let key = Season[value]
console.log(value, key);       // 0   spring












})()