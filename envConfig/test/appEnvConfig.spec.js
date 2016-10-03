'use strict'

describe('appEnvConfig Unit Test Spec', function() {
    const AppEnvConfig = require('../appEnvConfig');

    describe('AppEnvConfig', function() {
        it('should be a function', function() {
            expect(AppEnvConfig).toEqual(jasmine.any(Function));
        });
    });

    describe('AppEnvConfig()', function() {
        it('should throw an error if an env description is not provided', function() {
            expect(AppEnvConfig).toThrow();
        });
        
        it('should throw an erro if env description is different of dev or prod', function() {
            let invalidEnv = 'invalidEnv'; 

            expect(function() {
                new AppEnvConfig(invalidEnv);
            }).toThrow();
            
        });
    });
});