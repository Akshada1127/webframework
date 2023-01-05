const MongoClient = require("mongodb").MongoClient
const url="mongodb://localhost:27017/EmpDB";
const dbname="EmpDB";
MongoClient.connect(url,function(err,client)
{
    if(err) throw err;
    var db=client.db("EmpDB");
    //insert single document

    var rec=[
        {"empid":3,"ename":"Snehal","desg":"manager","salary":35000},
        {"empid":4,"ename":"ritika","desg":"manager","salary":35000}
    ];
    db.collection("emp").insertMany(rec,function(err,response)
      {
        if(err) throw err;
        console.log("Multiple Data Inserted.....");
        console.log(rec)
      });
      client.close();
});


