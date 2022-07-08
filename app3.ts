(function() {
/*
    ts中的接口
*/
interface A {
    name: string
}

// 组合
interface A {
    age: number
}
// 接口名相同 会合并，所以属性都要写入
let obj:A = {
    name: '嗷嗷叫',
    age: 15
}
console.log(obj);

interface Person {
    // name: string,
    readonly name: string    // 只读属性，不可赋值了
    age?: number              // 可选式操作符， 在下面的对象中不一定要实现
    [propName: string]: any       // 任意类型模式，在下面的对象中可以出现任意属性，任意类型
    // [propName: string]: string | number | undefined,      // 联合类型,这样写的话会影响接口里的其他属性
    cb(): void
}
// 实现接口
let p: Person = {
    name: '张三',
    // age: 18,
    // aaa: []
    bbb: 123,
    cb: ():void => {

    }
}
console.log(p);

// p.name = 'dsas'   // 只读属性，不可赋值了

// 接口继承
interface C extends A {
    height: number
}

let p2: C = {
    name: '小小',
    age: 20,
    height: 175
}
console.log(p2);


})()