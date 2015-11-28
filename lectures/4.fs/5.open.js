/*
 * fd 文件描述符
 * buffer 从文件中读到哪个缓存区中
 * offset 向缓存区中的写入数据时的开始位置
 * length 从文件中读取的长度
 *
 * position 从文件中读取的时候的开始位置 字节的位置
 *
 *
 *
 * */
var fs = require('fs');
//fs.readFile()
var fd = fs.openSync('read.txt','r');
console.log(fd);
var buffer = new Buffer(12);
fs.readSync(fd,buffer,0,3,3);
console.log(buffer.toString())