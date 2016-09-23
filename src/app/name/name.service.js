/*

    Service permettant de mettre un nom sur une addresse
    @author : Joël CHRABIE

*/
"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var NameService = (function () {
    function NameService(http) {
        this.http = http;
    }
    NameService.prototype.getNameByAddress = function (address) {
        return this.http.get('http://localhost:80/ad/' + address)
            .catch(this.handleError);
    };
    NameService.prototype.getNames = function () {
        return this.http.get('http://localhost:80')
            .map(this.extractData)
            .catch(this.handleError);
    };
    NameService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || 'Contrat Choupette';
    };
    NameService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    NameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameService);
    return NameService;
}());
exports.NameService = NameService;
//# sourceMappingURL=name.service.js.map