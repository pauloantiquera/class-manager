'use strict'

describe('Class Api Config Test Spec', function() {
    const apiConfig = require('../api');

    describe('Class Api Module', function() {
        it('should return function', function() {
            expect(apiConfig).toEqual(jasmine.any(Function));
        });
    });

    describe('apiConfig(expressApp)', function() {
        it('should throw an error if an expressApp is not provided', function() {
            expect(apiConfig).toThrow();
        });

        it('should invoke addModule(`/class`, moduleRouteConfig)', function() {
            let expressApp = {};
            expressApp.addModule = jasmine.createSpy('addModule');
            
            apiConfig(expressApp);

            expect(expressApp.addModule).toHaveBeenCalledWith('/class', jasmine.any(Function));
        });
    });
});