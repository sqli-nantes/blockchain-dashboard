/*

    Service permettant de parser un objet JS en objet de class et de récupérer le nom du User
    @author : Joël CHRABIE

*/
"use strict";
var core_1 = require('@angular/core');
var name_service_1 = require('./name/name.service');
var AppService = (function () {
    function AppService(ns) {
        this.ns = ns;
    }
    /*
      @Param:  json: Objet JS à parser
               type: type de l'objet à parser
      @Return: Objet parser dans le type donné en entrée
    */
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
    /*
      @Param:   users: tableau d'utilisateurs sans leur nom
      Utilisation du service 'NameService' pour récupérer le nom via l'addresse de l'utilisateur
    */
    AppService.prototype.getName = function (users) {
        var _loop_1 = function(prop) {
            if (!isNaN(parseFloat(prop))) {
                this_1.ns.getNameByAddress(users[prop].address).toPromise().then(function (responce) { return users[prop]['name'] = responce; });
            }
        };
        var this_1 = this;
        for (var prop in users) {
            _loop_1(prop);
        }
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [name_service_1.NameService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map