(function() {
    'use strict';

    angular
        .module('ClassManagerApp.assembly', [
            'class',
            'ui.router'
        ])
        .config(defaultRouteConfig);

    defaultRouteConfig.$inject = [
        '$urlRouterProvider',
        'classDefaultState'
    ];

    function defaultRouteConfig($urlRouterProvider, classDefaultState) {
        $urlRouterProvider
            .otherwise(classDefaultState);
    }
})();