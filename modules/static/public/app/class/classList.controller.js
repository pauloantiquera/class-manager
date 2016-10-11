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
        vm.openModalForClassEditing = openModalForClassEditing;
        vm.removeClass = removeClass;

        function postRemoveAction() {
            fillClasses();
        }

        function removeClass(clazz) {
            clazz.$delete(
                {id: clazz.id},
                postRemoveAction,
                postRemoveAction
            );
        }

        function postUpdateAction() {
            fillClasses();
        }

        function updateClass(clazz) {
            clazz.$update(
                {id: clazz.id},
                postUpdateAction,
                postUpdateAction
            );
        }

        function createModalConfigObjectForEditing(modalTitle, clazz) {
            let config = {
                backdrop: 'static',
                controller: 'classModalController as classModalCtrl',
                resolve: {
                    title: function() { return modalTitle },
                    clazz: function() { 
                        return classResource.get({id: clazz.id}).$promise; 
                    }
                },
                templateUrl: '/app/class/classModal.html'
            };

            return config;
        };

        function openModalForClassEditing(clazz) {
            let modalTitle = 'Editing Class';
            let modalConfig = createModalConfigObjectForEditing(modalTitle, clazz);

            let modalInstance = $uibModal.open(
                modalConfig
            );

            modalInstance.result.then(
                updateClass
            );
        }

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
            clazz.$save(
                postSaveAction,
                postSaveAction
            );
        }

        function createModalConfigObjectForCreating(modalTitle, clazz) {
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
            let modalConfig = createModalConfigObjectForCreating(modalTitle, clazz);

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