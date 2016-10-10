(function() {
    'use strict';

    angular
        .module('class')
        .controller('classListController', classListController);

    classListController.$inject = [
        'classResource',
        '$uibModal'
    ];

    function classListController(classResource, $uibModal) {
        var vm = this;

        vm.classes = [];
        vm.hasClasses = hasClasses;
        vm.openModalForNewClass = openModalForNewClass;

        function hasClasses() {
            return vm.classes.length > 0;
        }

        function fillClasses() {
            classResource.query({}, function(data) {
                vm.classes = data;
            });
        }

        function postSaveAction() {
            fillClasses();
        }

        function createNewClass(clazz) {
            console.log(clazz);

            clazz.$save(
                postSaveAction,
                postSaveAction
            );
        }

        function createModalConfigObject(modalTitle, clazz) {
            let config = {
                backdrop: 'static',
                controller: 'classModalController as classModalCtrl',
                resolve: {
                    title: function() { return modalTitle },
                    clazz: function() { return clazz }
                },
                templateUrl: '/app/class/classModal.html'
            };

            return config;
        }

        function openModalForNewClass() {
            let modalTitle = 'New Class';
            let clazz = new classResource();
            let modalConfig = createModalConfigObject(modalTitle, clazz);

            let modalInstance = $uibModal.open(
                modalConfig
            );

            modalInstance.result.then(
                createNewClass
            );

        }

        activate();

        ////////////////

        function activate() {
            fillClasses();
        }
    }
})();