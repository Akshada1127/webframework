var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

// Root Page is directly Routed to Login.html (Using Middleware)
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index1.html');
});

app.get('/login',function(req,res){
    res.sendFile(__dirname + '/login.html');
});

app.post('/login',function(req,res){
    person = {
        username:req.body.usrname,
        password:req.body.pass
    };
    res.end("Logged in Successfully " + JSON.stringify(person));
});

var server = app.listen(3000,function(){
    console.log("Server is Running");
});


/*index.html

<form action="/upload" enctype="multipart/form-data" method="post">
    <div class="form-group">
        <input type="file" class="form-control-file" name="file">
        <input type="submit" value="Upload File" class="btn btn-default">
    </div>
    
    
    login.html
    
    <html>
    <head>
        <title>LOGIN FORM</title>
    </head>
    <body>
        <form action="http://localhost:3000/login" method="post">
            Username: <br> <input type="text" name="usrname" required> <br><br>
            Password: <br> <input type="password" name="pass" required> <br><br>
            <input type="submit" value="LOGIN">
        </form>
    </body>
</html>
