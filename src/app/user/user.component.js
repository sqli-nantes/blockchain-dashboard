"use strict";
var core_1 = require('@angular/core');
var User_1 = require('../class/User');
var Numeral = require('numeral');
var UserComponent = (function () {
    function UserComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', User_1.User)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], UserComponent.prototype, "amount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserComponent.prototype, "type", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-information',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map