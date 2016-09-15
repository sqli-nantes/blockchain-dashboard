"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var name_service_1 = require('./name/name.service');
var User_1 = require('./class/User');
var users_const_1 = require('./utils/users.const');
var AppService = (function () {
    function AppService(http, ns) {
        this.http = http;
        this.ns = ns;
    }
    AppService.prototype.getUsers = function () {
        var users;
        users = users_const_1.USERS;
        return this.parseObj(users, User_1.User);
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