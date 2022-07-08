(function() {
// 函数类型、函数扩展
// const fn = function(name: string, age: number):string {
//     return name + age
// }
// const fn = function(name: string, age: number = 30):string {    // 默认值
//     return name + age
// }
// const fn = function(name: string, age?: number):string {    // 可选链
//     return name + age
// }

// let res = fn('孙悟空', 999)

// 参数约束
interface User {
    name: string,
    age: number
}
const fn = function(user:User):string {  
    return user.name + user.age
}

let res = fn({
    name: '太上老君',
    age: 9999
})
console.log(res);

// 函数重载
function fun(params: number): void
function fun(params: string, params2: number):void
// function fun(params: any):any {                        // 上面两个是重载函数、这个是执行（操作）函数，重载函数的参数类型不同所以操作函数的参数类型需要设置为 any
//     return params
// }
function fun(params: any, params2?: any):any {                        // 参数个数不同， 所以按最少的算，第二个参数是可选的
    return params + params2
}











})()