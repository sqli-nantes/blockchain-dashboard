"use strict";
var core_1 = require('@angular/core');
var ArrowComponent = (function () {
    function ArrowComponent() {
    }
    ArrowComponent.prototype.ngOnInit = function () {
        if (this.rotate === 'true') {
            this.plus = true;
        }
        else {
            this.plus = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowComponent.prototype, "rotate", void 0);
    ArrowComponent = __decorate([
        core_1.Component({
            selector: 'arrow',
            templateUrl: './arrow.component.html',
            styleUrls: ['./_arrow.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], ArrowComponent);
    return ArrowComponent;
}());
exports.ArrowComponent = ArrowComponent;
//# sourceMappingURL=arrow.component.js.map