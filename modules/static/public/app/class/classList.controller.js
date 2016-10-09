(function() {
    'use strict';

    angular
        .module('class')
        .controller('classListController', classListController);

    classListController.$inject = [
        'classResource'
    ];

    function classListController(classResource) {
        var vm = this;

        vm.classes = [];
        vm.hasClasses = hasClasses;

        function hasClasses() {
            return vm.classes.length > 0;
        }

        function fillClasses() {
            classResource.query({}, function(data) {
                vm.classes = data;
            });
        }

        activate();

        ////////////////

        function activate() {
            fillClasses();
        }
    }
})();