import express from 'express'
import {ParseServer} from 'parse-server'
import ParseDashboard from 'parse-dashboard'
import cloudCode from './cloud/cloud.js';
var app = express();

const PARSE_SERVER_URL = 'http://localhost:1337/parse'
const PARSE_APP_ID = "MyAppId"
const PARSE_MASTER_KEY = "YouShallNotPass"
const APP_NAME = "ffffff"

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017,localhost:27018/?replicaSet=dbrs&readPreference=secondary',
  cloud: cloudCode,
  appId: PARSE_APP_ID,
  masterKey: PARSE_MASTER_KEY, 
  serverURL: PARSE_SERVER_URL,
  publicServerURL: PARSE_SERVER_URL,
  fileKey: "testa",
});

app.use('/parse', api);

var dashboard = new ParseDashboard(
    {
    apps: [
        {
        serverURL: PARSE_SERVER_URL,
        appId: PARSE_APP_ID,
        masterKey: PARSE_MASTER_KEY,
        appName: APP_NAME,
        },
    ],
    users: [
        {
        user: "admin",
        pass: "admin",
        },
    ],
    },
    { allowInsecureHTTP: true }
);

app.use("/dashboard", dashboard);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});