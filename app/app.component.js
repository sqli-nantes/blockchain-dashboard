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
var enode_const_1 = require('./enode.const');
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
        web3.setProvider(new web3.providers.HttpProvider('http://10.33.44.182:8547'));
        var addPeers = web3.admin.addPeer(enode_const_1.ENODE);
        console.log(addPeers);
        var filter = web3.eth.filter("latest");
        filter.watch(function (error, result) {
            if (!error) {
                console.log(result);
                var transac = web3.eth.getTransaction(result);
                console.log(transac);
            }
        });
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        return this.appService.getUsers().then(function (response) {
            _this.users = response;
        });
    };
    AppComponent.prototype.addStat = function () {
        this.addTransaction();
        setTimeout(function () {
            TweenMax.to(".ui:first-child", 0.6, { height: 0, reversed: true, ease: Sine.easeOut });
            TweenMax.to(".ui:first-child .transac_box", 0.6, { opacity: 1, delay: 0.6 });
            TweenMax.to(".ui:first-child .transaction", 0.6, { opacity: 1, delay: 0.6 });
        }, 1);
    };
    AppComponent.prototype.addTransaction = function () {
        this.transactions.unshift(this.randomTransac());
        if (this.transactions.length >= 5) {
            this.transactions.pop();
        }
    };
    AppComponent.prototype.randomTransac = function () {
        var uS = {}, uR = {};
        do {
            uS = this.users[this.random(5)];
            uR = this.users[this.random(5)];
        } while (uS === uR);
        return {
            sender: uS,
            receiver: uR,
            amount: this.random(99)
        };
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