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
