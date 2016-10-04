'use strict'

const express = require('express');

function ExpressApp(envConfig) {
    let app = express();

    function listen() {
        app.listen(envConfig.port, function() {
            console.log(`${envConfig.appName} listening on port:${envConfig.port}`)
        });
    }

    function addModule(path, moduleDescriptor) {
        let router = express.Router();
        let moduleRouter = moduleDescriptor(router);

        app.use(path, moduleRouter);
    }
    
    let expressApp = {
        listen: listen,
        addModule: addModule
    };

    return expressApp;
}

module.exports = ExpressApp;