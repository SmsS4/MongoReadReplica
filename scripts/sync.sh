#!/bin/bash
until mongo --host mongo-write:27017 --eval "print(\"waited for connection write\")"
do
    sleep 1
done

until mongo --host mongo-read:27017 --eval "print(\"waited for connection read\")"
do
    sleep 1
done

echo "Adding replicas"

mongo --host mongo-write:27017 <<EOF
var config = {
    "_id": "dbrs",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo-write:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "mongo-read:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
rs.reconfig(config, { force: true });
EOF