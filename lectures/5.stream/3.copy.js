/**
 * Created by maoerbaby on 15/11/28.
 */
var fs = require('fs');
function copy(src,dest){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(dest);
    rs.pipe(ws);
}
