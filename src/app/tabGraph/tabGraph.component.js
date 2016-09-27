/*

    Composant du tabulaire de graphiques
    @author : Joël CHRABIE

*/
"use strict";
// Import des librairies, service, ...
var core_1 = require('@angular/core');
var TabGraphComponent = (function () {
    function TabGraphComponent() {
    }
    TabGraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TabGraphComponent.prototype, "users", void 0);
    TabGraphComponent = __decorate([
        core_1.Component({
            selector: 'tab-graph',
            templateUrl: './tabGraph.component.html',
            styleUrls: ['./tabGraph.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TabGraphComponent);
    return TabGraphComponent;
}());
exports.TabGraphComponent = TabGraphComponent;
//# sourceMappingURL=tabGraph.component.js.map