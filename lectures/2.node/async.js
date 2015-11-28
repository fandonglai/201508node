var fs = require('fs');

console.log('a');
fs.readFile('1.callback.js','utf8',function(err,data){
    console.log(data);
});
console.log('b');