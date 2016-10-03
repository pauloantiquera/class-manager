'use strict'

describe('dbContext Unit Test Spec', function() {
    const DBContext = require('../dbContext');

    describe('dbContext Module', function() {
        it('should return a javascript class', function() {
            expect(DBContext).toEqual(jasmine.any(Function));
        });
    });

    describe('DBContext()', function() {
        let dbConfig = {
            url: 'bolt://localhost',
            user: 'neo4j',
            password: 'password',
            extraConfig: {}
        };

        let dbContext = new DBContext(dbConfig);
        
        it('should return a javascript object', function() {
            expect(dbContext).toEqual(jasmine.any(Object));
        });

        it('should return a object with a function getSession as a member', function() {
            expect(dbContext.getSession).toEqual(jasmine.any(Function));
        });
    });
});