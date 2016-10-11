'use strict'

const ClassRepository = require('./ClassRepository');
const url = require('url');

function ClassController() {
    const dbContext = global.dbContext;
    
    let classRepository = new ClassRepository();

    function doFindAll(request, response, next) {
        classRepository.findAll(function(error, classes) {
            response.status(200).send(classes);
        });        
    }

    function doCreate(request, response, next) {
        let body = request.body;

        classRepository.create(body, function(error, clazz) {
            if (error)
                return response.status(400).send(error);

            let uri = url.format({
                protocol: request.protocol,
                host: request.get('host'),
                pathname: request.originalUrl + '/' + clazz.id
            });

            response.status(201).location(uri).send(clazz);
        });
    }

    function getIdFromRequest(request) {
        return request.params.id;
    }

    function doGet(request, response, next) {
        let id = getIdFromRequest(request);

        classRepository.findById(id, function(error, clazz) {
            if (error)
                return response.status(400).send(error);
            
            if (clazz)
                return response.status(200).send(clazz);
            
            return response.status(204).end();
        });
    }

    function doDelete(request, response, next) {
        let id = getIdFromRequest(request);

        classRepository.deleteById(id, function(error) {
            if (error)
                return response.status(400).send(error);

            return response.status(204).end();
        });
    }
    
    function doUpdate(request, response, next) {
        let id = getIdFromRequest(request);
        let body = request.body;

        classRepository.update(body, function(error) {
            if (error)
                return response.status(400).send(error);
            
            return response.status(204).end();
        });            
    }

    let classController = {
        findAll: doFindAll,
        get: doGet,
        create: doCreate,
        update: doUpdate,
        delete: doDelete
    };

    return classController;
    
}

module.exports = ClassController;