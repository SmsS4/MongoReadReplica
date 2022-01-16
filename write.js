import {MongoClient} from 'mongodb'

var url = "mongodb://localhost:27017,localhost:27018?replicaSet=dbrs&readPreference=secondary";
const COLLECTION_NAME = "cll"



MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Connected!");
  var db = client.db("mydb");

  db.createCollection(COLLECTION_NAME).then(
    (res) => {
      console.log("Collection created!");
      var myobj = { name: "Company Inc", address: "Highway 37" };
      var hisobj = { name: "Onja", address: "Inja" };
      return db.collection(COLLECTION_NAME).insertMany([myobj, hisobj])
    }
  ).then(
    (res) => {
      console.log("2 document inserted");
      return db.collection(COLLECTION_NAME).find({}).toArray()
    }
  ).then(
    (res) => {
      console.log(`Found ${res.length} documents`)
      console.log(res);
      return
    }
  )
  .then(() => {
    client.close()
    console.log("Done. closing connection")
  })
  .catch((error) => {
    console.log("Error\n", error)
    client.close()
  })
});
