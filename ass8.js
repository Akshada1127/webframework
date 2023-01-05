
const MongoClient = require("mongodb").MongoClient
const url="mongodb://localhost:27017";
const dbname="EmpDB";
MongoClient.connect(url,function(err,client)
{
    if(err) throw err
    console.log("Connected");
    client.close();
});
