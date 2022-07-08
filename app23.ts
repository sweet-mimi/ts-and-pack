/*
    Proxy  和  Reflect

    Proxy 是代理一个对象的 get\set

    Reflect 可以操作一个对象的 get\set

    vue3 使用 Proxy 劫持对象

    可以放rollup里启动浏览器
*/


(function() {

type Person = {
    name: string
    age: number
    text: string
}

const proxy = (object:any, key:any) => {
    return new Proxy(object, {
        get(target, prop, receiver) {                     // （目标， 参数， 描述）
            console.log("======>get", prop);
            return Reflect.set(target, prop, receiver)
        },
        set(target, prop, value, receiver) {                  // （目标， 参数， 值， 描述）
            console.log("======>set", prop);
            return Reflect.set(target, prop, value, receiver)
        }
    })
}

// const logAccess = (object: Person, key: 'name' | 'age' | 'text') => {
//     return proxy(object, key)
// }
// 改成泛型
const logAccess = <T>(object: T, key: keyof T): T => {
    return proxy(object, key)
}

let man: Person = logAccess({
    name: '猪小明',
    age: 25,
    text: '3秒真男人'
}, 'name')

man.age = 30                // 会走 set
console.log(man);

// 定义成泛型之后， 这边可以建其他 对象
let man2 = logAccess({
    name: '猪小明',
    id: 10
}, 'id')                  














})()