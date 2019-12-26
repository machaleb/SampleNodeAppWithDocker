'use strict';

const express = require('express');
const config = require('./config');
const router = require('./routes/route');
const bodyParser = require('body-parser');

let server = express();

// support json encoded bodies
server.use(bodyParser.json());

// support encoded bodies
server.use(bodyParser.urlencoded({ extended: false }));

// use router middleware.
server.use(config.ROUTE_VIRTUAL_DIR , router(config));

// start the server
server.listen(config.SERVER_PORT, (err) => {
    if(err){
        console.log("something wrong with the port\n"+ err)
    }
    else{
        console.log("service is started on port: "+ config.SERVER_PORT);
    }
});
