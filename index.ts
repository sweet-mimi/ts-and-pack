(function(){

// 使用 tsc  --watch   监听ts的变化，自动编译成js

// dom内置
// NodeList 类数组
const list:NodeList = document.querySelectorAll('#list li')

console.log(list);

let body:HTMLElement = document.body                // 获取 body ，直接 .body

console.log(body);        // 打印出来 是 body 标签里面所有内容

const div:HTMLDivElement = document.querySelector('div') as HTMLDivElement     // 不加断言，会报错 null

console.log(div);

/*
TS把基本所有标签都设置了一个类型    HTMLxxxElement   xxxElement
 */

// bom 内置
document.addEventListener('click', (e: MouseEvent) => {
    console.log(e);
})
/*
    bom的事件， ts也都定义了
 */

// Promise
function promise():Promise<number> {                   // 这边应该和下面的返回类型一直包括泛型的
    return new Promise<number>((resolve, reject) => {        // 使用泛型 约束 返回值为数字
        resolve(1)
    })
}
promise().then(res => {
    console.log(res);
})


})()