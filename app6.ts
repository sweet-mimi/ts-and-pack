(function() {

// 联合类型
let phone: number | string = 13546586565         // 手机
phone = '020-8645646'         // 座机


let fn = function(type: number | boolean): boolean {
    return !!type
}

console.log(fn(1));

// 交叉类型
interface People{
    name: string,
    age: number
}
interface Man {
    sex: number
}
// 交叉类型使用单个 & 连接
const wawa = (man: People & Man) => {
    console.log(man);
}
// 两个参数类型都要实现
wawa({
    name: '娃娃坏掉了',
    age: 18,
    sex: 0
})

// 类型断言  as  和 <>

let len = function(num: number | string): void {
    console.log((num as string).length);                       // 如果直接 .length 会报错，因为number没有length属性，所以需要断言, as方式
}
len('123456')

interface A {
    run: string
}
interface B{
    build: string
}
let np = (type: A | B): void => {
    console.log((<A>type).run);               // B上没有run, 需要断言 <> 方式
}
np({
    run: 'dev'
    // build: 'build'                  // 同样打印不出来，不能乱用断言
})

// window.abc = 123
// (window as any).abc = 123         // 这样可以， 稍微欺骗下typescript






})()