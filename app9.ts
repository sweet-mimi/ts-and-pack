(function() {

// 元组 Tuple    其实就是数组的变种
// 元组是固定数量的不同类型的元素的组合

let arr:[string, number] = ['dangdang', 22]      // 约束已知索引的数组，这样的称为元组


console.log(arr[0].length);   // string 有length 属性，可以推断出
// console.log(arr[1].);      // 可以推断出 number没有length 属性

// 越界处理： 只能添加约束类型组成的联合类型的值 
// arr.push(true)                  // 报错。只能添加 string 和 number 类型
arr.push(65)









})()