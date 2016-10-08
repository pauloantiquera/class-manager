'use strict'

const ClassRepository = require('./classRepository');

function ClassController() {
    const dbContext = global.dbContext;
    
    let classRepository = new ClassRepository();

    function doFindAll(request, response, next) {
        classRepository.findAll(function(error, classes) {
            response.send(classes);
        });        
    }
    
    function notImplementedYet(request, response) {
        response.send('Not implemented yet!');
    }

    let classController = {
        findAll: doFindAll,
        get: notImplementedYet,
        create: notImplementedYet,
        update: notImplementedYet,
        delete: notImplementedYet
    };

    return classController;
    
}

module.exports = ClassController;