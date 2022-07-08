(function () {

// 定义数组
let arr: number[] = [1, 2, 3]      // 数组里需要统一类型

let arr2: string[] = ['1', '2', '3']

// 数组中有不同类型
let arr3: any[] = [1, 'bb', true, [], {}]

// Array泛型方式定义数组 
let arr4: Array<number> = [1, 32, 43, 54, 8]
let arr5: Array<string> = ['a', 'b', 'c', 'd']

console.log(arr, arr2, arr3, arr4, arr5);

// 二维数组
let arr6: number[][] = [[], [], []]

// 泛型方式
let arr7: Array<Array<number>> = [[1], [7898], [654, 684]]

let arr8: Array<Array<number | string>> = [[1, 'df'], [7898], [654, 684]]     // 联合类型

// 类数组
// interface IArguments{          // 已经内置
//     [index: number]: any;
//     length: number
//     callee: Function
// }
function Arr(...arg: any): void {
    console.log(arguments);
    // let arr: any[] = arguments          // 报错
    let arr: IArguments = arguments       // 使用这种方式
}

Arr(4, 5, 6)

// 也可以自定义类似接口用在数组上
interface ArrNumber{          
    [index: number]: number;
}
let list:ArrNumber = [1, 2, 3]

})()