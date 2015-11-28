var util = require('util');
var Readable = require('stream').Readable;
util.inherits(Counter,Readable);
function Counter(){
    Readable.call(this);
    this._max= 10;
    this._pos= 1;
};
Counter.prototype._read  = function(){
    var i = this._pos++;
    if(i>this._max){
        this.push(null);//触发end
    }else{
        this.push(new Buffer(i+""));//触发data
    }
}
var counter = new Counter();
//数据从哪里来
counter.on('data',function(data){
    console.log(data.toString());
});
counter.on('end',function(){

})