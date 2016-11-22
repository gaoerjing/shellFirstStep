var http=require('http');
var util=require('util');
var querystring=require('querystring');
console.log('start');
http.createServer(function(req,res){
    var post='';
    req.on('data', function(chunk){
            post += chunk;
	    console.log("data="+post);
    });
   req.on('end', function(){
       post = querystring.parse(post);
       console.log("end="+post);
       console.log("end2="+util.inspect(post));
       var buf = new Buffer(util.inspect(post));
       var json = buf.toJSON(buf);
       res.end(util.inspect(post));//返回给客户端
   });
}).listen(8888);
