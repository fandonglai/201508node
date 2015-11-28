/*
*
* */

var fs = require('fs');
function listener(current,previous){
    if(Date.parse(previous.ctime)==0){
        console.log('文件被创建')
    }else if(Date.parse(current.ctime)==0){
        console.log('文件被删除');
    }else{
        console.log('文件被修改')
    }
}
fs.watchFile('src/index.html',listener)