'use strict'

const Class = require('./Class');

function ClassRepository() {
    const dbContext = global.dbContext;

    function findAll(callback) {
        let session = dbContext.getSession();
            
        session
            .run('MATCH (clazz:Class) RETURN ID(clazz) as id, clazz.description as description, clazz.year as year')
            .then(function(result) {
                let classes = [];
                let records = result.records;

                for(let i = 0; i < records.length; i++) {
                    let id = records[i].get('id').low;
                    let description = records[i].get('description');
                    let year = records[i].get('year');
                    
                    let clazz = new Class(id, description, year);

                    classes.push(clazz);
                }

                callback(null, classes);
            });
    }

    function create(clazz, callback) {
        let session = dbContext.getSession();

        session
            .run(`CREATE (clazz:Class {description: "${clazz.description}", year: "${clazz.year}"}) RETURN ID(clazz) as id, clazz.description as description, clazz.year as year`)
            .then(function(result) {
                let records = result.records;

                let id = records[0].get('id').low;
                let description = records[0].get('description');
                let year = records[0].get('year');
                let clazz = new Class(id, description, year);

                callback(null, clazz);
            });
    }

    let classRepository = {
        findAll: findAll,
        create: create
    };

    return classRepository;
}

module.exports = ClassRepository;