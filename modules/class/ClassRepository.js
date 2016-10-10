'use strict'

const Class = require('./Class');

function ClassRepository() {
    const dbContext = global.dbContext;

    function processSingleResult(record) {        
        let id = record.get('id').low;
        let description = record.get('description');
        let year = record.get('year').low;
        let clazz = new Class(id, description, year);

        return clazz;
    }

    function executeQueryAndReturnSingleResult(query, callback) {
        let session = dbContext.getSession();

        session
            .run(query)
            .then(function(result) {
                let clazz = processSingleResult(result.records[0]);

                callback(null, clazz);
            }); 
    }

    function findAll(callback) {
        let session = dbContext.getSession();
            
        session
            .run('MATCH (clazz:Class) RETURN ID(clazz) as id, clazz.description as description, clazz.year as year')
            .then(function(result) {
                let classes = [];
                let records = result.records;

                for(let i = 0; i < records.length; i++) {
                    let clazz = processSingleResult(records[i]);

                    classes.push(clazz);
                }

                callback(null, classes);
            });
    }

    function executeQueryWithoutReturn(query, callback) {
        let session = dbContext.getSession();

        session
            .run(query)
            .then(function() {
                callback(null);
            });
    }

    function create(clazz, callback) {
        let query = `CREATE (clazz:Class {description: "${clazz.description}", year: ${clazz.year}}) RETURN ID(clazz) as id, clazz.description as description, clazz.year as year`;

        executeQueryAndReturnSingleResult(query, callback);
    }

    function findById(id, callback) {
       let query = `MATCH (clazz:Class) WHERE ID(clazz) = ${id} RETURN ID(clazz) as id, clazz.description as description, clazz.year as year`;

       executeQueryAndReturnSingleResult(query, callback);
    }

    function deleteById(id, callback) {
        let query = `MATCH (clazz:Class) WHERE ID(clazz) = ${id} DETACH DELETE clazz`;

        executeQueryWithoutReturn(query, callback);
    }

    function update(clazz, callback) {
        let query = 
    }

    let classRepository = {
        findAll: findAll,
        create: create,
        findById: findById,
        deleteById: deleteById,
        update: update
    };

    return classRepository;
}

module.exports = ClassRepository;