/**
 * Created by maoerbaby on 15/11/28.
 */
/*
* 编码是把3个8位字节 转化为4个6位字节
* */
var buffer = new Buffer('姜');
console.log(buffer);//<Buffer e5 a7 9c>
console.log(parseInt('e5',16),parseInt('a7',16),parseInt('9c',16));
//229 167 156
console.log((229).toString(2),(167).toString(2),(156).toString(2));
//11100101 10100111 10011100
//00111001 00011010 00011110 00011100
console.log(parseInt('00111001',2),parseInt('00011010',2),parseInt('00011110',2),parseInt('00011100',2));
//var sum = 0;
//for(var i=0;i<6;i++){
//    sum+=Math.pow(2,i);
//    console.log(sum);
//    console.log(Math.pow(2,6)-1)
//};
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
console.log(str[57]+str[26]+str[30]+str[28])
