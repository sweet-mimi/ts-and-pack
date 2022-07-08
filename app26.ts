(function() {

/* infer 占位符 */

// 定义一个类型，如果是数组类型就返回数组元素的类型， 否则 传入什么类型就返回什么类型

// type TYPE<T> = T extends Array<any> ? T[number] : T

// type A = TYPE<(string | number)[]>

// type B = TYPE<boolean>


// infer 简化
type TYPE<T> = T extends Array<infer U> ? U : T

type A = TYPE<(string | number)[]>

type B = TYPE<boolean>

type TYPE2<T> = T extends Array<infer U> ? U : never

type Turple = [string, number]       // 元组

type t = TYPE2<Turple>           // 需要返回一个元组

type nn = TYPE2<boolean>         // 这时会返回never , 说明有错误需要去处理











})()