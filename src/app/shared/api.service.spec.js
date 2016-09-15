"use strict";
var testing_1 = require('@angular/core/testing');
var api_service_1 = require('./api.service');
describe('Api Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [api_service_1.ApiService] });
    });
    it('should ...', testing_1.inject([api_service_1.ApiService], function (api) {
        expect(api.title).toBe('Angular 2');
    }));
});
//# sourceMappingURL=api.service.spec.js.map