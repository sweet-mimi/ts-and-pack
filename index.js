(function () {
    // 使用 tsc  --watch   监听ts的变化，自动编译成js
    // dom内置
    // NodeList 类数组
    var list = document.querySelectorAll('#list li');
    console.log(list);
    var body = document.body; // 获取 body ，直接 .body
    console.log(body); // 打印出来 是 body 标签里面所有内容
    var div = document.querySelector('div'); // 不加断言，会报错 null
    console.log(div);
    /*
    TS把基本所有标签都设置了一个类型    HTMLxxxElement   xxxElement
     */
    // bom 内置
    document.addEventListener('click', function (e) {
        console.log(e);
    });
    /*
        bom的事件， ts也都定义了
     */
    // Promise
    function promise() {
        return new Promise(function (resolve, reject) {
            resolve(1);
        });
    }
    promise().then(function (res) {
        console.log(res);
    });
})();
