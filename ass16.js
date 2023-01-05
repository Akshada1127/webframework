var fs=require('fs')
var http=require('http')
Object=http.createServer(function(request,response)
{   
    fs.readFile("a.txt",function(error,data){
       
        if(error)
            console.log("error message is",error)
        
        else
            fs.appendFile("first.txt",data,function(error)
            {
                fs.readFile("first.txt",function(error,data){
    
                var str=data.toString()
                console.log(data.toString())
                response.writeHead(200,{'content-type':'text/HTML'})
                response.write(str)
                response.end()
                       
                });   
            });
    });
});    
Object.listen(2080);                                                                                                                        