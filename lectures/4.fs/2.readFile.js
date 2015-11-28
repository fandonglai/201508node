/*
* O_RDONLY 只读
* O_SYNC 同步
* O_RDWR 可以读也可以写
* O_TRUNC 截断
* O_CREAT 创建文件
* O_WRONLY 只写
* O_APPEND追加
* O_EXCL paita
* |亦或   任何一个为true就为true
*
*
* */

var fs = require('fs');
fs.readFile('./read.txt',{encoding:'utf-8',flag:r},function(err,data){

})