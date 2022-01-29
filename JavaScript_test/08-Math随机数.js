// random() 返回一个随机的小数 0 <= x < 1 左闭右开
// 这个方法里面不能跟参数
// 代码验证
console.log(Math.random());
// 如果想要得到两个数之间的整数，并且是闭区间的
// 方法为 Math.floor(Math.random()*(max-min+1))+min;
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1,10))

// 随机点名的应用
var arr = ['张三','张三丰','张三疯子','李四','李思思','pink老师']
console.log(arr[getRandom(0,arr.length-1)])