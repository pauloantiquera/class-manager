describe('App Runner test suit', function() {
    const appRunner = require('../appRunner');

    describe('appRunner', function() {
        it('should be an object', function() {
            expect(appRunner).toEqual(jasmine.any(Object));
        });

        it('should have a function run', function() {
            expect(appRunner.run).toEqual(jasmine.any(Function));
        });
    });
});