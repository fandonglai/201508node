var fs = require('fs');
//var ws = fs.createWriteStream('./write.txt');
//for(var i=0;i<100;i++){
//    ws.write(i+'');
//}


function copy(src,dest){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(dest);
    rs.on('data',function(data){
        var flag = ws.write(data);
        if(!flag){
           rs.pause();
        }
    });
    ws.on('drain',function(){
        rs.resume()
    });
    rs.on('end',function(){
        console.log('end')
    })

}
copy('write.txt','write1.txt')