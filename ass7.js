var http=require('http')
var formidable=require('formidable');
http.createServer(function(req,res)
{
    if (req.url=='\fileupload')
    {
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files)
        {
            console.log(files)
            res.write('fileupload');
            res.end();
        
        });
    }else
{
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<form action="fileupload" method="get enctype=" multipart/form-data">');
        res.write('<input type="file" name="fileupload">');
        res.write('<input type="submit">');
        res.write('</forms>');
        return res.end();
    
}
console.log("file upload sucessfully");

}).listen(6080);