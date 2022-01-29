var obj = {
    name: 'pink老师',
    age:18,
    sex: '男',
    fn: function() {}
}
// for in 
for(var k in obj){
    console.log(k); // k 变量，得到的是属性名
    console.log(obj[k]);// obj[k](不用加引号)， 得到的是属性值
}