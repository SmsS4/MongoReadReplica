import {MongoClient} from 'mongodb'
var url = "mongodb://localhost:27017,localhost:27018?replicaSet=dbrs&readPreference=secondary";

const COLLECTION_NAME = "cll"

MongoClient.connect(
    url,
    // {readPreference: "secondary"},
    function(err, client){
      console.log("Hey")
      if (err) {
        console.log(err)
        client.close()
        throw err
      }
      var db = client.db("mydb");
      db.collection(COLLECTION_NAME).find({}
        ).toArray().then(
        (res) => {
          console.log(res)
          client.close()
        }
      ).catch((err) => {
        console.log("Error in Secondary\n", error)
        client.close()
      }) 
  });