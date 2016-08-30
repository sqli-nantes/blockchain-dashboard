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
require('./rxjs-extensions');
var app_service_1 = require('./app.service');
var web3 = require('./web3IPCExtension').web3;
var AppComponent = (function () {
    function AppComponent(appService, dom) {
        this.appService = appService;
        this.dom = dom;
        this.transactions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockchainConnect();
        this.getUsers();
        console.log(web3);
        setInterval(function () { return _this.addStat(); }, 5000);
    };
    AppComponent.prototype.blockchainConnect = function () {
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        return this.appService.getUsers().then(function (response) {
            _this.users = response;
        });
    };
    AppComponent.prototype.addStat = function () {
        TweenMax.to(".ui:first-child", 0.6, { opacity: 0.9, scale: 0.8 });
        this.addTransaction();
        setTimeout(function () {
            TweenMax.to(".ui:first-child", 0.6, { opacity: 0, height: 0, reversed: true });
        }, 1);
    };
    AppComponent.prototype.addTransaction = function () {
        this.transactions.unshift(this.randomTransac());
    };
    AppComponent.prototype.randomTransac = function () {
        var uS = {}, uR = {};
        do {
            uS = this.users[this.random(5)];
            uR = this.users[this.random(5)];
        } while (uS === uR);
        return { sender: uS, receiver: uR, amount: this.random(150) };
    };
    AppComponent.prototype.random = function (x) {
        return Math.floor(Math.random() * x);
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