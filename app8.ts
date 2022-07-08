(function() {

// 类
class Person {
    // 无参构造函数
    // constructor() {

    // }
    // 有参构造函数 接受传参的属性必须先定义类型
    // name: string
    // age: number
    // sub: boolean
    // constructor(name: string, age: number, sub: boolean) {
    //     this.name = name
    //     this.age = age
    //     this.sub = sub
    // }
    // 变量修饰符
    public name: string                 // public 内部外部都能访问,  不写的话默认是 public
    private age: number                // private 私有的，只能内部访问
    protected sub: boolean             // protected 受保护的, 只能内部或子类中访问
    constructor(name: string, age: number, sub: boolean) {
        this.name = name
        this.age = age
        this.sub = sub
    }

    static aaa: string = 'gdffrgse'            // 静态属性
    static run() {                            // 静态方法
        console.log(this.aaa);                // 静态方法内部不可以访问 实例属性，只能访问静态属性
        return 123
    }
    static build() {
        // this.run()                   // 静态方法之间可以互相调用
        return 'dev'
    }
}

// new Person('张三', 22, true)
let p = new Person('李四', 25, false)
console.log(p.name);                     // 这边提示没有 age 了，这边不能访问      提示也没有 sub 了， 不能访问 sub

// 继承，要去实现父类的构造方法
class Man extends Person{
    constructor() {
        super('赵六', 24, false)
        console.log(this.sub);       // sub的能访问， age还是不能访问
    }
}

// 静态属性和方法不可以通过 this 调用
// 访问静态属性
console.log(Person.aaa);
console.log(Person.run());    // 访问静态方法


// 通过接口去约束类
interface Hobby {
    run(type: boolean): void
}

// 类实现接口，要实现接口中的所有方法
// class Play implements Hobby {
//     run(type: boolean): void {
//         console.log(type);
//     }
// }

interface Eat {
    meat(less: boolean):void
}
// 实现多个类
// class Play implements Hobby,Eat {
//     run(type: boolean): void {
//         console.log(type);
//     }
//     meat(less: boolean): void {
//         console.log(less);
//     }
// }


// 同时继承
class Play extends Person implements Hobby,Eat {
    run(type: boolean): void {
        console.log(type);
    }
    meat(less: boolean): void {
        console.log(less);
    }
}



// 抽象类  abstract 修饰的
abstract class A {
    params: string
    constructor(params: string) {
        this.params = params
    }
    // 抽象方法
    abstract getName(): string
}
// 抽象类无法实例化， 只能被继承， 继承的类中，必须实现抽象类中的抽象方法
 class B extends A {
    constructor() {
        super('lili')
    }
    getName(): string {
        return this.params                // this 访问父类中继承过来的熟悉
    }
 }

 let b = new B()
 console.log(b.getName());
 



})()