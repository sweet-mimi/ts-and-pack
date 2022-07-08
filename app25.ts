(function() {

/*
    readonly   \    record
*/


type Person = {
    name: string
    age: number
    weight: number
}

/*
type Readonly<T> = {
    readonly [P in keyof T]: T[P];         // T[P]  是取元素，跟 对象取元素一样 Object[key]
};
*/
type Man = Readonly<Person>          // 把Person 中每个属性变成只读属性， 形成一个新的类型

type R<T> = {
    readonly [P in keyof T]: T[P];
};
type Man2 = R<Person>                   // Man2 和 Man 是等价的



/*
type Record<K extends keyof any, T> = {          // keyof any 其实是 string | number | symbol  这三个的联合类型, 所以 Record 的key值只能是这三个类型
    [P in K]: T;
};
*/

type K = "A" | "B" | "C"
type Rec = Record<K, Person>

let obj:Rec = {
    A: {             // A 约束的是Person 类型，所以要实现 Person中的属性
        name: '佩奇',
        age: 10,
        weight: 20
    },
    B: {
        name: '乔治',
        age: 5,
        weight: 15
    },
    C: {
        name: '艾丽莎',
        age: 10,
        weight: 22
    }
}













})()