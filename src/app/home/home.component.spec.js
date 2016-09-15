"use strict";
// This shows a different way of testing a component, check about for a simpler one
var core_1 = require('@angular/core');
var testing_1 = require('@angular/core/testing');
var home_component_1 = require('./home.component');
describe('Home Component', function () {
    var html = '<my-home></my-home>';
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [home_component_1.HomeComponent, TestComponent] });
        testing_1.TestBed.overrideComponent(TestComponent, { set: { template: html } });
    });
    it('should ...', function () {
        var fixture = testing_1.TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('Home Works!');
    });
});
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({ selector: 'my-test', template: '' }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=home.component.spec.js.map