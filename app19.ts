(function() {

//mixins

interface Name {
    name: string
}

interface Age {
    age: number
}

interface Sex {
    sex: number
}

let a:Name = {name: 'lilei'}
let b:Age = {age: 15}
let c:Sex = {sex: 1}

// 合并对象,使用Object.assign()方法 会返回一个新对象，新对象类型 为 上面三个接口的 交叉类型， 这就是对象混入
let newObj = Object.assign(a,b,c)

// 类的混入
class A{
    type: boolean              // 使用严格模式下， 会报错：没有在构造方法中赋值，  在tsconfig.json 中取消 "strict" 模式
    changeType(): void {
        this.type = !this.type
    }
}
class B{
    name: string
    getName(): string {
        return this.name
    }
}

// 当作为混入的时候， implements 可以实现两个类(把类当做接口)， 上面两个类是作为混入类， C作为实现类
class C implements A,B {
    type: boolean = false
    changeType: () => void 
    name: string = 'mm'
    getName:() => string 
}

// 帮助函数
mixins(C, [A,B])
function mixins(dClass: any, baseClass: any[]) {
    baseClass.forEach(base => {
        console.log(base);   // 上面类中方法(函数)会挂载到原型上面
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            console.log(name);  // 方法(函数)名称
            dClass.prototype[name] = base.prototype[name]             // 将混入类的方法(函数)挂载到操作类的原型上
        })
    })
}
// 实现一下
let ccc = new C()
console.log(ccc.type);   // false

ccc.changeType()

console.log(ccc.type);   // true









})()