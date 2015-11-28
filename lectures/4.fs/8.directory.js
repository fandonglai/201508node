/*
* 目录
* */
var fs = require('fs');
//创建目录
/*fs.mkdir('test',0666,function(err){
    if(err){
        console.error(err)
    }
});*/
/*fs.readdir('test',function(err,files){
    if(err){
        console.error(err);
    }else{
        console.log(files)
    }
});

fs.stat('test',function(err,stat){
    console.log(stat)
});
fs.exists('test/file1',function(exists){
    console.log(exists)
});

//从相对路径获取绝对路径
fs.realpath('test',function(err,realpath){
    console.log(realpath)
});

//重命名
fs.rename('test','test2',function(){

});*/

//截断文件
var path = './msg.txt';
fs.stat(path,function(err,stat){
    console.log(stat.size);
    fs.truncate(path,6,function(err){
        fs.stat(path,function(err,stat2){
            console.log(stat2)
        })
    })
});


//删除空目录
fs.rmdir('test2',function(err){
    console.log(err)
});
fs.mkdir('test1',0666,function(err){
    if(err){
        console.error(err)
    }else{
        fs.mkdir('test1/subtest',0666,function(err){
            if(err){
                console.error(err)
            }
        });
    }
});

//创建目录
function makeP(path){

}