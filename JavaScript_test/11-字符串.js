// 字符串对象 根据字符返回位置 str.indexOf('要查找的字符'，[起始的位置])
var str = '改革春风吹满地，中国人民真争气，春天来了';
console.log(str.indexOf('春'));
console.log(str.indexOf('春', 3)); // 从索引号是 3 的位置开始查找
// 如果不知到第一个春索引号是几的情况
// 可以这样
console.log(str.indexOf('春', str.indexOf('春') + 1));