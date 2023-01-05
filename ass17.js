var http=require('http')
var dt=require('./module.js')
http.createServer(function(request,response)
{
    response.writeHead(200,{'content-type':'text/HTML'});
    response.write("The date and time are currently is"+dt.myDatetime())
    response.end();
}).listen(8080);