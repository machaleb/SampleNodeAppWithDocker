'use strict';
const express = require('express');
const router = express.Router();

module.exports = (config) => {
    
    /*
        HTTP GET / route
    */
    router.get("/", (req, res) => {
        
        res.send("Hello from sample node application")
    });
    
	return router;
};
