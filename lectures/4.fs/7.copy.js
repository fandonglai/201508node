var fs = require('fs');
function copy(src,dest){
    var buff = new Buffer(8*1024);
    var srcFd = fs.openSync(src,'r');
    var destFd = fs.openSync(dest,'w');
    var readSofar = 0;
    var writeSofar = 0;
    do{
        var read = fs.readSync(srcFd,buff,0,buff.length,readSofar);
        fs.writeSync(destFd,buff,0,writeSofar);
        readSofar+= read;
        writeSofar+= read;
    }while(read==buff.length)


    fs.closeSync(srcFd);
    fs.closeSync(destFd);
}
copy('./read.txt','./read2.txt')
