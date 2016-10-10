(function() {
'use strict';

    angular
        .module('class')
        .controller('classModalController', classModalController);

    classModalController.$inject = [
        '$uibModalInstance',
        'title',
        'clazz'
    ];
    
    function classModalController($uibModalInstance, title, clazz) {
        var vm = this;
        vm.clazz = clazz;

        vm.getTitle = getTitle;
        vm.cancel = cancel;
        vm.save = save;

        function save() {
            $uibModalInstance.close(clazz);
        }

        function cancel() {
            $uibModalInstance.dismiss();
        }

        function getTitle() {
            return title;
        }

        activate();

        ////////////////

        function activate() { }
    }
})();