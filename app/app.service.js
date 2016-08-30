"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
var name_service_1 = require('./name.service');
var User_1 = require('./User');
var AppService = (function () {
    function AppService(http, ns) {
        this.http = http;
        this.ns = ns;
        this.dataUrl = 'app/users'; // URL to web api
    }
    AppService.prototype.getUsers = function () {
        var _this = this;
        var users;
        return this.http.get(this.dataUrl).toPromise()
            .then(function (response) {
            return _this.parseObj(response.json().data, User_1.User);
        });
    };
    AppService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AppService.prototype.parseObj = function (json, type) {
        var instance = new type();
        for (var prop in json) {
            if (!json.hasOwnProperty(prop)) {
                continue;
            }
            if (typeof json[prop] === 'object') {
                instance[prop] = this.parseObj(json[prop], type);
            }
            else {
                instance[prop] = json[prop];
            }
        }
        this.getName(instance);
        return instance;
    };
    AppService.prototype.getName = function (users) {
        for (var prop in users) {
            if (!isNaN(parseFloat(prop))) {
                users[prop]['name'] = this.ns.getNameByAddress(users[prop].address);
            }
        }
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, name_service_1.NameService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map