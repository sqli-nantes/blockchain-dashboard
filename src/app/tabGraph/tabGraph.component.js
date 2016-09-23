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
        this.users = [
            { name: 'Choupette', address: '0x3d2fd9440ce1f0496bb95c3fe4d2c27367bf6ad2', balance: 5000 },
            { name: 'Jim', address: '0xe9bd4d7c245f4b14388f2bc71a09b0264057c31e', balance: 8000 },
        ];
    };
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