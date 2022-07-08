(function() {

// Symbol

let s:symbol = Symbol()
let str:symbol = Symbol('二傻')
let num:symbol = Symbol(111)
let num2:symbol = Symbol(111)

console.log(num === num2);  // fasle
// 虽然传的值一样， 但Symbol是唯一值， 底层指针地址不一样

// 所以Symbol作为对象的key比较多

let obj = {
    [s]: '464',      // symbol类型的 key
    [str]: 65,
    name: '小李',    // 普通字符串 key
    sex: 1
}

console.log(obj[s]);         // 通过symbol取值

// 几种遍历对象的方式
for (let key in obj) {
    console.log(key);        // name, sex      区别： symbol类型的key不会打印出来
}

Object.keys(obj)           // ['name', 'sex']      同样的symbol类型 的key 也是不会打印出来

console.log(Object.getOwnPropertyNames(obj))    // ['name', 'sex']     也打印不出出来

console.log(JSON.stringify(obj));          // {"name": "小李", "sex": 1}      也是没有的

// 以上几种方式都读不到
// 能读到的方式
console.log(Object.getOwnPropertySymbols(obj));  // [Symbol(), Symbol(二傻)]       只能读到symbol属性的 key

// Reflect (es6新增)方式， 会打印出所有 key 值， （除隐藏属性）
console.log(Reflect.ownKeys(obj));   // ['name', 'sex', Symbol(), Symbol(二傻)]

// Symbol.iterator 迭代器    很多类型都实现了这个迭代器，  Set、Map、NodeList(类数组)、数组、string、arguments ...
let arr:Array<number> = [4,5,6]

let it:Iterator<number> = arr[Symbol.iterator]()   // 获取迭代器

console.log(it.next());   // {value: 4, done: false}
console.log(it.next());   // {value: 5, done: false}
console.log(it.next());   // {value: 6, done: false}
console.log(it.next());   // {value: undefined, done: true}



// 其他类型
let set: Set<number> = new Set([1,2,3])
// set.add(4)

type mapKeys = any
let map: Map<mapKeys, mapKeys> = new Map()

map.set('1', '大一')
map.set('2', '大二')

// 手动封装 一个生成器      实际上 for...of 已经实现了这样的封装
function gen(erg: any) {
    let it:Iterator<any> = erg[Symbol.iterator]()
    let next: any = {done: false}                  // 初始化默认值
    while(!next.done) {
        next = it.next()
        if(!next.done) {
            console.log(next.value);
        }
    }
}
// gen(arr)
gen(set)
gen(map)
// 使用for...of会调用Symbol.iterator的方法
for(let item of arr) {
    console.log(item);
} 
for(let item of set) {
    console.log(item);
} 
for(let item of map) {
    console.log(item);
} 

for (const key in arr) {         // for...in 是遍历 索引，  for...of 是遍历 值（因为调用Symbol.interator）
    console.log(key);
}


// 对象没有实现Symbol.iterator,  所以 需要用 for...in , 或者 Object.keys() 等等几种方法 













})()