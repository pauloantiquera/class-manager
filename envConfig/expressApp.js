'use strict'
const express = require('express');

function ExpressApp(envConfig) {
    let app = express();

    function listen() {
        app.listen(envConfig.port, function() {
            console.log(`Express app listening on port:${envConfig.port}`)
        });
    }
    
    let expressApp = {
        listen: listen
    };

    return expressApp;
}

module.exports = ExpressApp;