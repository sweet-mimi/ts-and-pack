(function(){
// ts的类型声明
let str: string = 'ts'

let moban: string = `hello ${str}`

console.log(moban);

/*
    number 可以声明 NAN Infinity  十六进制 二进制 等等
*/
let num: number = 123    // 普通数字

console.log(num);


let b: boolean = false
let b1: boolean = Boolean(1)
// 对象的声明是首字母大写格式
let b2: Boolean = new Boolean(1)

console.log(b2);

// 声明空值 是一个void , 
let v: void = undefined
// let n: void = null          // null 不能用void接收，  这个在指定了--strictNullChecks 严格模式后（tsconfig.json中的"strict"设置为true时）， null不可以赋值给void

// 函数使用，表示无返回值
function fnVoid(): void {
    // return                 // 这里只能写return 或者不写
}

function fn(): number {
    return 123
}

let u: undefined = undefined
let n: null = null

// 
let str1: string = 'str'
// str1 = v             //  报错， void不可以赋值
// str1 = u             //  报错， 这个在指定了--strictNullChecks严格模式后      undefined不可以赋值给其他类型     
// str1 = n             //  报错， 这个在指定了--strictNullChecks严格模式后      null不可以赋值给其他类型       


/*
    这个ts文件通过 tsc 命令编译成 js文件， 再使用 node 命令调用
 */
})()