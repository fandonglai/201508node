var fs = require('fs');

//异步
var data = fs.readFileSync('./read.txt',{encoding:'utf-8'});
console.log(data);

//同步
fs.readFile('./read.txt',{encoding:'utf-8'},function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});

function readFile(path,options,callback){
    setTimeout(function(){
       if(error){
           callback('文件不存在');
       }else{
           callback(null,'')
       }
    })
}

