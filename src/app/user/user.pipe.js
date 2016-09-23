/*

    Filtre monétique qui parse un nombre en monaie Wei, Ether, ou Sonantes
    @author : Joël CHRABIE

*/
"use strict";
var core_1 = require('@angular/core');
var currencies_const_1 = require('../utils/currencies.const');
var Numeral = require('numeral');
var NumeralFormatPipe = (function () {
    function NumeralFormatPipe() {
    }
    NumeralFormatPipe.prototype.transform = function (value, currency) {
        Numeral.language(currency, currencies_const_1.CURRENCIES[currency]);
        Numeral.language(currency);
        var v = Numeral().unformat(value);
        return Numeral(v).format('0[.]00 a $');
    };
    NumeralFormatPipe = __decorate([
        core_1.Pipe({
            name: 'numeralFormat',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], NumeralFormatPipe);
    return NumeralFormatPipe;
}());
exports.NumeralFormatPipe = NumeralFormatPipe;
//# sourceMappingURL=user.pipe.js.map