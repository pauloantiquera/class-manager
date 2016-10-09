'use strict'

const express = require('express');

function staticModuleConfig(modulePath) {
    const expressApp = global.expressApp;


    if (!expressApp) {
        throw new Error('An ExpressApp instance must be provided');
    }

    function moduleRouteConfig() {
        return express.static(__dirname + '/public');
    }

    expressApp.addModule(modulePath || '/', moduleRouteConfig);
}

module.exports = staticModuleConfig;