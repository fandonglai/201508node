var fs = require('fs');
//fs.writeFileSync('./read.txt','姜文是猪猪猪猪猪猪猪猪姜文是猪猪猪猪猪猪猪猪',{encoding:'utf8',flag:'a'},function(err,data){
//    console.log(err)
//});

//追加
//fs.appendFile('./write.txt','姜文是猪猪猪猪猪猪猪猪姜文是猪猪猪猪猪猪猪猪',function(err,data){
//    if(err){
//        console.log(err);
//    }else{
//
//    }
//})

//文件拷贝
fs.readFile('./a.jpg',{flag:'r'},function(err,data){
    fs.writeFile('./b.jpg',data,{flag:'w'},function(err,data){
        console.log(err)
    });
});
