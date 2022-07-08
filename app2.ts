(function(){
/*
 为了直接运行ts文件，需要安装 npm i ts-node -g 和 npm i @types/node -D
 安装完成后，使用ts-node 命令直接调用 ts文件
 */
// ts顶级类型 any 和 unknown

let anys:any = 'hello world'

// any 可以赋值任何类型
anys = 18
anys = true
anys = {}
anys = []
anys = Symbol('11')

let un:unknown = 'hello world'

// unknown 跟any差不多
un = 18
un = true
un = {}
un = []
un = Symbol('11')

// any 和 unknown 的区别
let unknown:unknown = {a: 1, an: ():number => {return 123}}
let any2:any = {b: 1, bn: ():number => {return 123}}

// console.log(unknown.a, unknown.an())               // 报错， unknown不可以调用属性、方法

console.log(any2.b, any2.bn());                   // any可以调用属性、方法


let str: any = 'didi'

let str2: string = '憨批'

str = str2;                     // 可以赋值

let app2strun: unknown = 'didi'

app2strun = str2;             // 最新版本： unknown 可以任意类型赋值 ， 之前版本，unknown只能赋值自身和 any 类型

// 总结： unknown 比 any 更安全
})()