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
require('gsap');
var browser_adapter_1 = require('@angular/platform-browser/src/browser/browser_adapter');
var transaction_1 = require('./transaction');
var User_1 = require('./User');
require('./rxjs-extensions');
var core_2 = require('@angular/core');
var app_service_1 = require('./app.service');
var web3IPCExtension_1 = require('./web3IPCExtension');
var injector = core_2.ReflectiveInjector.resolveAndCreate([
    transaction_1.Transaction,
    User_1.User
]);
var transaction = injector.get(transaction_1.Transaction);
var user = injector.get(User_1.User);
var AppComponent = (function () {
    function AppComponent(appService, dom) {
        this.appService = appService;
        this.dom = dom;
        this.transactions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
        console.log(web3IPCExtension_1.web3);
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        return this.appService.getUsers().then(function (response) {
            _this.users = response;
        });
    };
    AppComponent.prototype.addStat = function () {
        TweenMax.to(".ui:first-child", 0.6, { opacity: 0.9, scale: 0.6 });
        this.addTransaction();
        setTimeout(function () {
            TweenMax.to(".ui:first-child", 0.6, { opacity: 0, height: 0, reversed: true });
        }, 1);
    };
    AppComponent.prototype.randomTransac = function () {
        var uS = {}, uR = {};
        do {
            uS = this.users[Math.floor(Math.random() * 5)];
            uR = this.users[Math.floor(Math.random() * 5)];
        } while (uS === uR);
        return { sender: uS, receiver: uR, amount: Math.floor(Math.random() * 150) };
    };
    AppComponent.prototype.addTransaction = function () {
        this.transactions.unshift(this.randomTransac());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            templateUrl: 'app/app.component.html',
            providers: [browser_adapter_1.BrowserDomAdapter, app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, browser_adapter_1.BrowserDomAdapter])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map