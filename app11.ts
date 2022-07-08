(function() {

// 类型推论

let str = "字符串"           // 这时候 str 会被ts自动推断为 string

// str = 456            // 无法再赋值数字


let a               // 只定义不赋值， 会自动推断为 any 类型

a = 456


type s = string | number     // 类型别名   联合类型

let b:s = 'bilibili'
b = 456

type cb = () => string          // 函数形式，类型别名
const fn:cb = () => '开车啦'


type T = 'off' | 'on'     // 字面量形式 类型别名
// let v:T = '545'      // 报错，只能是 'off' 或 'on'






})()