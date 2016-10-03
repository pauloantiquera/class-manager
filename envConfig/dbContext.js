'use strict'

const neo4j = require('neo4j-driver').v1;

function DBContext(dbConfig) {        
    let driver = neo4j.driver(dbConfig.url, neo4j.auth.basic(dbConfig.user, dbConfig.password), dbConfig.extraConfig);

    function getSession() {
        let session = driver.session();

        return session;
    }

    let dbContext = {
        getSession: getSession
    };

    return dbContext; 
}

module.exports = DBContext;