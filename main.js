var mongo = require('mongodb');
const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017,localhost:27018?replicaSet=dbrs";





MongoClient.connect(url).then((client) => {
  console.log("connected")
}).catch((error) => {
  console.log(error)
});
