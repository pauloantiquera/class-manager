'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

function ExpressApp(envConfig) {
    let app = express();

    app.use(cors());
    app.use(bodyParser.json());

    function listen() {
        app.listen(envConfig.port, function() {
            console.log(`${envConfig.appName} listening on port:${envConfig.port}`)
        });
    }

    function addModule(path, moduleRouteConfig) {
        let router = express.Router();
        let moduleRouter = moduleRouteConfig(router);

        app.use(path, moduleRouter);
    }
    
    let expressApp = {
        listen: listen,
        addModule: addModule
    };

    return expressApp;
}

module.exports = ExpressApp;