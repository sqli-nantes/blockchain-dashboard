"use strict";
var testing_1 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/router/testing');
var shared_1 = require('./shared');
var app_component_1 = require('./app.component');
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent],
            providers: [shared_1.ApiService, router_1.provideRoutes([])]
        });
        app = new app_component_1.AppComponent();
    });
    describe('Testing Component app', function () {
        it('test Randomize', function () {
            var randomize = app.randomize(5);
            expect(randomize).toBeGreaterThan(0);
            expect(randomize).toBeLessThan(6);
            expect(randomize).toBe('number');
        });
    });
    describe('Testing math', function () {
        it('multiplying should work', function () {
            expect(4 * 4).toEqual(16);
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map