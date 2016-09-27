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
        this.newTransac = new core_1.EventEmitter(true);
    }
    AppService.prototype.setTransaction = function (transaction) {
        this.newTransac.emit(transaction);
    };
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
            if (typeof json[prop] === 'object' && (typeof json[prop] === 'string' ||
                typeof json[prop] === 'number' || typeof json[prop] === 'date' || typeof json[prop] === 'Date')) {
                instance[prop] = this.parseObj(json[prop], type);
            }
            else {
                instance[prop] = json[prop];
            }
        }
        return instance;
    };
    /*
      @Param:   users: utilisateur sans nom
      Utilisation du service 'NameService' pour récupérer le nom via l'addresse de l'utilisateur
    */
    AppService.prototype.getName = function (user) {
        return this.ns.getNameByAddress(user.address).toPromise().then(function (responce) {
            return responce['_body'];
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppService.prototype, "newTransac", void 0);
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [name_service_1.NameService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map