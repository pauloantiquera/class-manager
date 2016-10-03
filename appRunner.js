'use strict'

function run(appConfig) {
    let app = appConfig.createExpressApp();

    app.listen();
}

let appRunner = {
    run: run
}

module.exports = appRunner;