const MongoClient = require("mongodb").MongoClient
const url="mongodb://localhost:27017/EmpDB";
const dbname="EmpDB";
t=MongoClient.connect(url,function(err,client)
{
    if(err) throw err;
    var db=client.db("EmpDB");
    //insert single document

    var rec={"empid":4,"ename":"kirti","desg":"clerk","salary":35000};
    db.collection("emp").insertOne(rec,function(err,res)
  
      {
        if(err) throw err;
        console.log("Data Inserted.....");       
        console.log(res)
      });
     
      client.close();
});






















