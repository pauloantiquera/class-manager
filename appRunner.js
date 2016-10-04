'use strict'

function run(expressApp) {
    expressApp.listen();
}

let appRunner = {
    run: run
}

module.exports = appRunner;