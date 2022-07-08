(function() {

// never 表示 不应该存在的状态

// type n = string & number         // 这样的交叉类型，即是 string 又是 number ，ts感觉这是一个不可能的事， 所以推断为 never ，表示不对的， 需要去掉后面的交叉类型


function error(message: string): never {       // 抛出一个错误，不会有返回值， 所以使用 never
    throw new Error(message)
}

function loop(): never {          // 死循环
    while(true) {

    }
}

// 例子
interface A {
    type: '保安'
}

interface B {
    type: '草莓'
}

interface C {
    type: '油条'
}

type All = A | B | C                // 如果这边多加了一个 C， 下面不处理的话，会直接报错
function type(val: All) {
    switch(val.type) {
        case '保安':
            break;
        case '草莓':
            break;
        case '油条':            // 所以这边需要加处理
            break;
        default:
            const check:never = val        // 兜底逻辑， 如果走到这一步说明出错了， never是一种父类型赋值的类型， 所以val 是以上联合类型，没法向never赋值
            break;
    }
}













})()