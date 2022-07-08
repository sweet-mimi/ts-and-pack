var str = 'ts';
var moban = "hello ".concat(str);
console.log(moban);
/*
    number 可以声明 NAN Infinity  十六进制 二进制 等等
*/
var num = 123; // 普通数字
console.log(num);
var b = false;
var b1 = Boolean(1);
// 对象的声明是首字母大写格式
var b2 = new Boolean(1);
console.log(b2);
// 声明空值 是一个void , null 不能用void接收
var v = undefined;
// 函数使用，表示无返回值
function fnVoid() {
    // return                 // 这里只能写return 或者不写
}
function fn() {
    return 123;
}
var u = undefined;
var n = null;
// 
var str1 = 'str';
// str1 = v             //  报错， void不可以赋值
// str1 = u             //  报错， undefined不可以赋值
// str1 = n             //  报错， null不可以赋值
