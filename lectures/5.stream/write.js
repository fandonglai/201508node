var fs = require('fs');
fs.writeFile('./128.txt',new Buffer(129*1024));