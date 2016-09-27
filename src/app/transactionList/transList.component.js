/*

    Composant de liste de transaction
    @author : Joël CHRABIE

*/
"use strict";
// Import des librairies, service, ...
var core_1 = require('@angular/core');
var app_service_1 = require('../app.service');
// Effets d'animations GSAP avec TweenMax
require('gsap');
var TransListComponent = (function () {
    function TransListComponent(appService) {
        this.appService = appService;
        this.users = [];
    }
    TransListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TransListComponent.prototype, "transactions", void 0);
    TransListComponent = __decorate([
        core_1.Component({
            selector: 'trans-list',
            templateUrl: './transList.component.html',
            styleUrls: ['./transList.component.scss'],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], TransListComponent);
    return TransListComponent;
}());
exports.TransListComponent = TransListComponent;
//# sourceMappingURL=transList.component.js.map