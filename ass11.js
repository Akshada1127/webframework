/*const { toArray } = require("mongodb/lib/operations/cursor_ops");

const MongoClient = require("mongodb").MongoClient
const url="mongodb://localhost:27017/student";
const dbname="student";
MongoClient.connect(url,function(err,client){
    if(err) throw err;
    var db=client.db("EmpDB");
    var query={"empid":1};
    db.collection("emp").find().sort(query).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
    });
    client.close();
});
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("EmpDB");
  var myquery = { empid : 1 };
  dbo.collection("emp").deleteOne(myquery, function(err, obj) {
    if(err) throw err;
    console.log("1 document deleted");
    console.log(myquery);
    db.close();
  });
});   
