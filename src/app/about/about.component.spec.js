"use strict";
var testing_1 = require('@angular/core/testing');
var about_component_1 = require('./about.component');
describe('About Component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [about_component_1.AboutComponent] });
    });
    it('should ...', function () {
        var fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
    });
});
//# sourceMappingURL=about.component.spec.js.map