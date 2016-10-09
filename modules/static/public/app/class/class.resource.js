(function() {
    'use strict';

    angular
        .module('class')
        .constant('classApiBaseUrl', 'http://localhost:3000/classes')
        .factory('classResource', classResource);

    classResource.$inject = [
        '$resource',
        'classApiBaseUrl'
    ];

    function classResource($resource, classApiBaseUrl) {
        var resourceConfig = {
            'update': {method: 'PUT'}
        };

        return $resource(classApiBaseUrl + '/:id', {id: '@_id'}, resourceConfig);
    }
})();