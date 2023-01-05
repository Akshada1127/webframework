var str="hello world";
var http=require('http');
var uc=require('upper-case');
http.createServer(function(require,response){
response.writeHead(200,{'content-type':'text/html'})
response.write(uc.upperCase(str));
response.end();
}).listen(4000);
console.log("server")