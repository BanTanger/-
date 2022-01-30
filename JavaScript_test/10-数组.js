var arr = ['pink', 'red', 'blue'];
arr.reverse();
console.log(arr);

// 冒泡
var arr2 = [13, 4, 22, 11, 1, 7, 77];
arr2.sort(function (a, b) {
    // return b - a; // 降序排列
    return a - b; // 升序排列
})
console.log(arr2)

// 返回数组元素索引号 indexOf（数组元素） 
// 只返回 第一个满足条件的索引号
// 检测 元素在数组是否存在
var arr3 = ['red', 'green', 'blue', 'blue'];
console.log(arr3.indexOf('blue'));  // 2
console.log(arr3.lastIndexOf('blue')); // 3


// 去重 
function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var demo = unique(['blue','green','red','blue','green','red'])
console.log(demo);
// js 无 set 需要自己封装
// var demo2 = set(['blue','green','red','blue','green','red'])
// console.log(demo2) 


// 数组转换为字符串
// 1. toString() 将我们的数组转换为字符串 但不能自己选定分隔符
var arr = [1,2,3];
console.log(arr.toString()); //1,2,3
// 2.join(分隔符)
var arr2 = ['blue','green','red'];
console.log(arr.join()); // 1,2,3
console.log(arr.join('-'));  // 1-2-3
console.log(arr.join('&')); // 1&2&3 --> 常用，后台申请表单
