const express = require("express");
const bodyParser = require("body-parser");
// express config
const app = express();
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'income';

// Create a new MongoClient
const client = new MongoClient(url);

let db;

// Use connect method to connect to the Server
client.connect(function(err) {
  db = client.db(dbName);
  console.log("database connected")
});



// var list= [
//     {"code": "vk_001","name":"akshay","address":[]},
//     {"code": "vk_002","name":"Haren","address":[]},
//     {"code": "vk_003","name":"Rahul","address":[]},
// ]

app.get('/', function (req, res) {
  res.send('details')
})

{/*delete*/}


app.get("/user/delete/:id",function(req, res){
    const userId = req.params["id"]
    list = list.filter((item,index)=> {return (userId != index +1)} )
    res.json({ "user": list })
})

  {/*show*/}
app.get('/user/show/:id', function (req, res) {
    const userId=req.params['id'];
    // res.json({'user': list[userId-1]})
    var ObjectId = require('mongodb').ObjectId;
    var new_id= new ObjectId(userId);
    db.collection('users').find({"_id":new_id}).toArray(function(err, response){
      res.json({'user':response})
    })
  });


 {/*edit*/}
  app.post('/user/edit/:id', function (req, res) {
      //const user= req.body;
    const userId=req.params['id'];
    // list[userId-1]=user
    // res.json({'user': list[userId-1]})
    var ObjectId = require('mongodb').ObjectId;
    var new_id= new ObjectId(userId);
    db.collection('users').update({"_id":new_id},{$set:{"code":req.body.code,"name":req.body.name,}}, function(err, response){
      res.send((err === null) ? {msg: ''} : {msg: err}
      );
    });
  });


  {/*list of users*/}
  app.get('/users', function (req, res) {
    // res.json({'user': list})
    db.collection('users').find({}).toArray(function(err, response){
      console.log(response)
      res.json({'user':response})
    })
  });


  {/*list of income details*/}
  app.get('/expense', function (req, res) {
    db.collection('users').find({}).toArray(function(err, response){
      console.log(response)
      res.json({'user':response})
    })
  });


  {/*lcreate users*/}
  app.post('/user/create', function (req, res) {
    //   const user= req.body;
    //   list.push(user);
    //   console.log(user)
    // res.send({'id': (list.length)});
    db.collection('users').insertOne({"code":req.body.code,"name":req.body.name},function(err, response){
      console.log(response)
    })
  });


  app.post('/user/add', function (req, res) {
    //   const user= req.body;
    //   list.push(user);
    //   console.log(user)
    // res.send({'id': (list.length)});
    db.collection('users').insertOne({"expense":req.body.expense,"expense_amount":req.body.expense_amount, "name":req.body.name},function(err, response){
      console.log(response)
    })
  });

  
   {/*lcreate address*/} 
  app.post('/user/:id/address/create', function (req, res){
       const add= req.body;
       const userId=req.params['id']
       list[userId-1].address.push(add)
       res.send({'address': list[userId-1]})
  });
//   app.get('/user/:id/addresses', function (req, res) {
//       const userId=req.params['id'];
//     res.json({'address':address });
//   });

  {/*edit address*/}
  app.post('/user/edit/:id/:address_id', function (req, res) {
    const add= req.body;
  const userId=req.params['id'];
  const index=req.params['address_id']
  list[userId-1].address[index]=add
  res.json({'address': list[userId-1]})
});

 {/*Show address*/}
app.get('/user/show/:id/:address_id', function (req, res) {
  const userId=req.params['id'];
  const index=req.params['address_id']
  const show=list[userId-1].address[index]
  res.json({'address': show})
}); 

{/*delete address*/}
app.get("/user/:id/address/delete/:address_id",function(req, res){
    const userId = req.params["id"];
    const index=req.params['address_id'];
    list[userId-1].address = list[userId-1].address.filter((item,index)=> {return (userId != index +1)} )
    res.json({ "user": list })
});

app.listen(3010)
console.log("running")