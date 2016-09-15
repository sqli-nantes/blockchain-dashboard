"use strict";
var core_1 = require('@angular/core');
var Numeral = require('numeral');
var NumeralFormatPipe = (function () {
    function NumeralFormatPipe() {
    }
    NumeralFormatPipe.prototype.transform = function (value, amount, type) {
        if (amount === void 0) { amount = 0; }
        if (type === void 0) { type = null; }
        Numeral.language('nantes');
        value = Numeral().unformat(value);
        switch (type) {
            case '+':
                value.add(Numeral(amount));
                break;
            case '-':
                value.subtract(Numeral(amount));
                break;
            default:
                break;
        }
        return Numeral(value).format('0.00 a $');
    };
    NumeralFormatPipe = __decorate([
        core_1.Pipe({ name: 'numeralFormat' }), 
        __metadata('design:paramtypes', [])
    ], NumeralFormatPipe);
    return NumeralFormatPipe;
}());
exports.NumeralFormatPipe = NumeralFormatPipe;
//# sourceMappingURL=user.pipe.js.map