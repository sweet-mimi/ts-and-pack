(function() {

/*
Partial \  Pick
*/


type Person = {
    name: string
    age: number
    height: number
}

/*
// 底层是这样的
type Partial<T> = {
    [P in keyof T]?: T[P];             // in可以理解为for in，用在定义类型当中 { [] },  
};
*/

type p = Partial<Person>         // Partial 会把 Person 里的参数全部变成可选， 形成一个新的类型

let person: p = {
    
}


/*
// 底层这样的
type Pick<T, K extends keyof T> = {       // extends 相当于继承父类型 用在 定义泛型中 <> 
    [P in K]: T[P];                       // in可以理解为for in，用在定义类型当中 { [] },  
};
*/

type pp = Pick<Person, 'age' | 'name'>   // Pick 是用来摘出 部分类型， 形成一个新的类型

let obj: pp = {
    name: 'lulu',
    age: 12
}




















})()