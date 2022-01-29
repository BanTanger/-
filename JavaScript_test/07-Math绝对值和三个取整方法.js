// Math.floor() 往下取整 往小了取
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1
// Math.ceil() 往上取整 往大了取
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2
// Math.round() 四舍五入
// 其他数字都是四舍五入，但.5这个比较特殊，它往大了取。
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.9)); // 2
console.log(Math.round(-1.1)); // -1
console.log(Math.round(-1.5)); // -1 
console.log(Math.round(-1.9)); // -2
