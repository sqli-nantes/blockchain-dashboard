"use strict";
var core_1 = require('@angular/core');
var name_const_1 = require('./name.const');
var NameService = (function () {
    function NameService() {
    }
    NameService.prototype.getNameByAddress = function (address) {
        return name_const_1.NAMES[address];
    };
    NameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NameService);
    return NameService;
}());
exports.NameService = NameService;
//# sourceMappingURL=name.service.js.map