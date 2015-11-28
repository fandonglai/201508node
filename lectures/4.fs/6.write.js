/*
* fd  文件描述符
* buffer  buffer对象
* offset  从缓存区的哪个位置开始读
* length  读多少字符
* position 写入文件的起始位置
* callback
* */
var fs = require('fs');
fs.open('./msg.txt','w',function(err,fd){
    console.log(fd);
    var buffer = new Buffer('珠峰培训')
    fs.write(fd,buffer,6,6,0,function(err,byteWrite,buff){
        console.log('成功写入了'+byteWrite+'字节');
        fs.write(fd,buffer,0,6,6,function(err,byteWrite,buff){
            console.log('成功写入了'+byteWrite+'字节')
        })
    })
})