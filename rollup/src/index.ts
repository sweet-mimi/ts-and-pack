
// const a: string = "hello rollup"
// const a: string = "hello rollup !!!"

// console.log(a);

// console.log(process.env.NODE_ENV);    // 配置 replace 后有了

// if(process.env.NODE_ENV === 'development') {
//     console.log('开发');
// } 
// if(process.env.NODE_ENV === 'production') {
//     console.log('生成');
// } 

// 发布者 订阅者
interface Event {
    on: (name: string, fn: Function) => void    // 监听
    emit: (name: string, ...args: Array<any>) => void   // 派发
    off: (name: string, fn: Function) => void    // 移除监听
    once: (name: string, fn: Function) => void   // 一次监听
}
interface List {
    [key:string]: Array<Function>
}

class Dispath implements Event {
    list: List
    constructor() {
        this.list = {}
    }
    bubbles: boolean
    cancelBubble: boolean
    cancelable: boolean
    composed: boolean
    currentTarget: EventTarget
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    returnValue: boolean
    srcElement: EventTarget
    target: EventTarget
    timeStamp: number
    type: string
    composedPath(): EventTarget[] {
        throw new Error("Method not implemented.")
    }
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
        throw new Error("Method not implemented.")
    }
    preventDefault(): void {
        throw new Error("Method not implemented.")
    }
    stopImmediatePropagation(): void {
        throw new Error("Method not implemented.")
    }
    stopPropagation(): void {
        throw new Error("Method not implemented.")
    }
    AT_TARGET: number
    BUBBLING_PHASE: number
    CAPTURING_PHASE: number
    NONE: number


    on (name: string, fn: Function) {              // 第一个参数为事件名称，第二个参数为回调函数
        const callback = this.list[name] || []      // list的每一个参数都是 以事件名为键，值是一个数组，存放每一个相同事件的回调
        callback.push(fn)
        this.list[name] = callback
        // console.log(this.list);
    } 
    emit (name: string, ...args: Array<any>) {       // 第一个参数为事件名称， 后面参数不限制，以一个数组保存
        let eventName = this.list[name]             // 取事件，看是否有这个事件
        if(eventName) {
            eventName.forEach(fn => {
                fn.apply(this, args)          // 第二个参数是一个数组
            })
        } else {
            console.error(`名称错误${name}`);
        }
    }
    off (name: string, fn: Function) {
        let eventName = this.list[name]             // 取事件，看是否有这个事件
        if(eventName && fn) {
            let index = eventName.findIndex(fns => fns === fn)
            eventName.splice(index, 1)                              // 最好这样移除
            // console.log(eventName);
        } else {
            console.error(`事件不存在${name}`);
        }
    }
    once (name: string, fn: Function) {           // 只调用一次，需要一个临时函数，用完删掉， 借助 on 和 off
        let tmp = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, tmp)
        }
        this.on(name, tmp)
    }
}

const o = new Dispath()

// 监听
o.on('post', (...args: Array<any>) => {       // 接受下面派发事件的参数
    console.log(args, 1);
})
o.on('post', (...args: Array<any>) => {        // 接受派发事件的参数
    console.log(args, 2);
})
// const fn = (...args: Array<any>) => {       
//     console.log(args, 3);
// }
// o.on('post', fn)                              // 监听 fn 事件

// o.off('post', fn)                              // 移除 fn 事件的监听

o.once('post', (...args: Array<any>) => {
    console.log(args, 'once');
})

// 派发
o.emit('post', 1, false, {name: 'dada'})
o.emit('post', 2, true, {name: 'dudu'})