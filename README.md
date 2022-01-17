# MongoReadReplica

### Virgol post

### Create databases
``` docker-compose -f docker-compose-final.yml up ```  
mongo-read instance on port 27018 is for read query and  
mongo-write instance on port 27017 is for write query

### Connect to mongo-read container
``` docker exec -it mongo-read bash ```

### Connect to mongo-write container
``` docker exec -it mongo-write bash ```

### Install mongo client
``` sudo apt install mongodb-clients ```

### Connect to write database
```  mongo --host "mongodb://localhost:27017" ```

### Connect to read database
```  mongo --host "mongodb://localhost:27018" ```


### Install nodejs dependencies 
``` node install ```

### Write to database
``` node write.js ```

### Read from database
``` node read.js ```

### Run parse server
``` node app.js ```

### Parse dashboard url
http://localhost:1337/dashboard

### Mongodb URI:
mongodb://localhost:27017,localhost:27018/?replicaSet=dbrs&readPreference=secondary





