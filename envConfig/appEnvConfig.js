'use strict'

const DBContext = require('./dbContext');
const ExpressApp = require('./expressApp');

function AppEnvConfig(env) {
    
    function createDbContext() {
        const dbConfig = require(`./dbConfig-${env}`);

        return new DBContext(dbConfig);
    }

    function createExpressApp() {
        const envConfig = require(`./envConfig-${env}`);

        return new ExpressApp(envConfig);
    }

    function validate() {        
        if (env !== 'dev' && env !== 'prod')
            throw new Error('The env description must be `env` or `prod`.');
    }

    validate();    

    let appConfig = {
        createDbContext: createDbContext,
        createExpressApp: createExpressApp
    };

    return appConfig;
}

module.exports = AppEnvConfig;