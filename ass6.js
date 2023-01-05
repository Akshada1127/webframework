var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(request,response)
{
    var q=url.parse(request.url,true);//(request.url,true);
    var filename="."+q.pathname;
    fs.readFile(filename,function(error,data)
    {
        if(error)
        {
            response.writeHead(404,{'content-type':'text/html'});
            return response.end("404 not found");
        }
        response.writeHead(200,{'content-type':'text/html'});
        response.write(data);
        response.end();

    });
}).listen(3080);
