// Date() 日期对象 是一个构造函数 必须使用new来调用创建我们的日期对象
var arr = new Array(); // 创建一个数组对象
var obj = new Object(); // 创建一个对象实例
// 1.使用Date对象 如果没有参数，返回当前系统当前时间
var date = new Date();
console.log(date);
// 如果括号里面有时间，就会返回参数里面的时间
var date = new Date('2022-1-30');
console.log(date);


// 日期年月日的格式化
var date = new Date();
console.log(date.getFullYear()); //返回当前年份；
console.log(date.getMonth() + 1); // 返回当前月份 - 1； 因为月份是 0~11
console.log(date.getDate()); //返回 几号
console.log(date.getDay()); // 返回 星期几 星期一到星期六为1~6，星期日是0

// 日期时分秒的格式化
var date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
// 函数封装 
function getTimer() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    // 逻辑判断
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}
console.log(getTimer())


// 时间戳
// 1. 通过两个方法，valueOf(),getTime()
var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
// 2. 简单写法
var date = +new Date();
console.log(date);
// 3. H5新增
console.log(Date.now());


// 倒计时案例 
function countDown(time) {
    var nowTime = +new Date(); // 返回 当前时间的总毫秒数
    var setTime = +new Date(time); // 返回 用户输入时间的总毫秒数
    var times = (setTime - nowTime) / 1000; // time 是剩余的秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    var h = parseInt(times / 60 / 60 % 24); // 时
    var m = parseInt(times / 60 % 60); // 分
    var s = parseInt(times % 60); // 秒
    // 逻辑判断
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
console.log(countDown('2022-9-1 18:00:00'));