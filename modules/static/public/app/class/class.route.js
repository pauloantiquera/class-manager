(function() {
    'use strict';

    angular
        .module('class')
        .config(classRouteConfig)
        .constant('classDefaultState', '/classes');

    classRouteConfig.$inject = [
        '$stateProvider'
    ];
    
    function classRouteConfig($stateProvider) {
        $stateProvider
            .state('classes', {
                url: '/classes',
                controller: 'classListController as classListCtrl',
                templateUrl: '/app/class/classList.html'
            });
    }
})();