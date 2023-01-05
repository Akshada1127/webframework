var fs=require('fs')
fs.readFile("b.txt",function(err,data)
{
    if(err)
    console.log("Error message is",err)
    else
    fs.appendFile("first.txt",data,function(err){
        if(err) throw err
        console.log(fs.readFileSync("first.txt","utf-8"))
        console.log("Content is updated")
    });
})

