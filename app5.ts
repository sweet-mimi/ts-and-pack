(function() {
// 函数类型、函数扩展
// const fn = function(name: string, age: number):string {
//     return name + age
// }
// const fn = function(name: string, age: number = 30):string {    // 默认值
//     return name + age
// }
// const fn = function(name: string, age?: number):string {    // 可选链  函数的可选参数必须配置到最后一个参数上
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


// 函数类型接口 约束: 对方法的参数及返回值 进行约束
interface encrypt{
    (key:string, value:string):string
}

var su:encrypt = function(key:string, vlaue:string): string {
    return key + vlaue;
}

console.log(su('name', 'zhangsan'));

// 泛型函数接口

interface config{
    <T>(value:T):T
}

var getData:config = function<T>(vlaue:T): T {
    return vlaue;
}

getData<string>('abc')

interface configF<T>{
    (value:T):T
}

function getData2<T>(vlaue:T): T {
    return vlaue;
}

var mygetData: configF<string> = getData2

mygetData('20')












})()