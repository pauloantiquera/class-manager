'use strict'

const ClassController = require('./controller');

function classModuleConfig(modulePath) {
    const expressApp = global.expressApp;


    if (!expressApp) {
        throw new Error('An ExpressApp instance must be provided');
    }

    function moduleRouteConfig(router) {
        let classController = new ClassController(dbContext);

        router.get('/', classController.findAll);
        router.get('/:id', classController.get);
        router.post('/', classController.create);
        router.put('/:id', classController.update);
        router.delete('/:id', classController.delete);

        return router;
    }

    expressApp.addModule(modulePath || '/classes', moduleRouteConfig);
}

module.exports = classModuleConfig;
