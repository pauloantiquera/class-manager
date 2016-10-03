'use strict'

function run(appConfig) {
    let app = appConfig.getApp();

    app.listen();
}

let appRunner = {
    run: run
}

module.exports = appRunner;