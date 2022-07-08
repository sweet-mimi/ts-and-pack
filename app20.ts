(function() {

// 装饰器： 若要启用装饰器特性，你必须在tsconfig.json里启用experimentalDecorators编译器选项 或 用命令行：tsc --experimentalDecorators 开启

// 写一个监察装饰器
const watcher: ClassDecorator = (target:Function) => {
    // console.log(target);
    target.prototype.getName = <T>(name: T): T => {
        return name
    }
}

// 使用装饰器
@watcher
class A{

}
let a = new A()

// 好处：直接可以用在各个类上，  react的高阶函数可以使用装饰器模式
@watcher
class B{

}
let b = new B()

console.log((<any>a).getName('name'));
console.log((<any>b).getName('name'));

// 装饰器传参 需要写一个高阶函数来接收传参
const handler = (name:string): ClassDecorator => {
    return (target:Function) => {
        // console.log(target);
        target.prototype.getNames = () => {
            return name
        }
    } 
}

@handler('小妹')
class C{

}
let c = new C()
console.log((<any>c).getNames());

// 组合式装饰器
// @handler('aaa') @watcher
@handler('aaa')
@watcher 
class D{

}

// 属性装饰器
const log:PropertyDecorator = (...args) => {
    console.log(args);                       // 打印所有参数， 有3个参数 [{}, "name", undefined]: [target, 属性名， 描述]
}
// 方法装饰器
const logs:MethodDecorator = (...args) => {
    console.log(args);                       // 打印所有参数， 能打印出 [{}, "getName", {value: , ...}]: [target, 方法名， 方法描述]
}
// 参数装饰器
const param:ParameterDecorator = (...args) => {
    console.log(args);                       // 打印所有参数， 能打印出 [{}, "setName", 0]: [target, 方法名， 参数位置]
}
class P{
    @log                  // 使用： 放在属性的上面
    name:string
    constructor() {

    }
    @logs                // 使用：放在方法上
    getName() {
        return '6465'
    }
    setName(@param name: string): string {        // 使用： 放在参数前
        return name
    }
}
let p = new P()
















})()