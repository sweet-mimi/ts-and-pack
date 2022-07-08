(function() {

// function num(a: number, b: number): number[] {
//     return [a, b]
// }
function num(a: number, b: number): Array<number> {       // 跟上面同样效果
    return [a, b]
}
num(1,2)

function str(a: string, b: string): Array<string> {
    return [a, b]
}
str('word', '很大')

// 使用泛型的方式， 自定义泛型
function add<T>(a: T, b: T): Array<T> {
    return [a, b]
}
// 调用的时候再定义具体类型
// add<number>(1, 2)
// add<string>('ss', 'mm')
add(1, 2)            // 类型推论
add('ss', 'mm')

// 多个类型
function sub<T, U>(a: T, b: U): Array<T | U> {
    let arr: Array<T | U> = [a, b]
    return arr
}
sub<number, string>(1, 'ss')
sub(2, 'dd')

// 泛型约束
interface Len {
    length: number
}
function getLength<T extends Len>(arg: T) {     // extends不是继承，是泛型约束
    return arg.length                    // 这种情况需要约束，参数必须要传有length属性的类型
}
getLength([1,2,3])

// 约束泛型对象， 这个 key值类型必须是 obj 所有键的联合类型的子类型， keyof T 是获取 T 的所有键， 返回类型是联合类型
function prop<T, K extends keyof T>(obj: T, key:K) {
    return obj[key]
}
let obj = {a: 1, b: 2, c: 3}

prop(obj, 'a')

// prop(obj, 'd')    // 报错， d 不属于 obj 的所有键的组成的联合类型 的子类型 ， 如果不加上面的约束，则是越界处理， 返回undefined

// 泛型类 
class Subs<T> {
    attr: T[] = []
    add(a: T): T[] {
        return [a]
    }
}

let s = new Subs<number>()       // 这里泛型约束了 number 类型
s.attr = [1,2,3]                // 数组中只能写数字
s.add(123)                     // 只能传数字

let s2 = new Subs<string>()       
s2.attr = ['dsf']               
s2.add('ufghdaisf')                


})()