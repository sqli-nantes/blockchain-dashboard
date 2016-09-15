"use strict";
var testing_1 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/router/testing');
var shared_1 = require('./shared');
var app_component_1 = require('./app.component');
describe('App', function () {
    // provide our implementations or mocks to the dependency injector
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent],
            providers: [shared_1.ApiService, router_1.provideRoutes([])]
        });
    });
    it('should have an url', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
    });
});
//# sourceMappingURL=app.component.spec.js.map