"use strict";
var core_1 = require('@angular/core');
require('gsap');
var browser_adapter_1 = require('@angular/platform-browser/src/browser/browser_adapter');
var User_1 = require('./class/User');
var Transaction_1 = require('./class/Transaction');
var app_service_1 = require('./app.service');
var enode_const_1 = require('./utils/enode.const');
var web3 = require('./utils/web3IPCExtension').web3;
var AppComponent = (function () {
    function AppComponent(appService, dom) {
        this.appService = appService;
        this.dom = dom;
        this.transactions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.blockchainConnect();
    };
    AppComponent.prototype.blockchainConnect = function () {
        var _this = this;
        web3.setProvider(new web3.providers.HttpProvider('http://10.33.44.182:8547'));
        web3.admin.addPeer(enode_const_1.ENODE);
        var filter = web3.eth.filter('latest');
        filter.watch(function (error, result) {
            if (!error) {
                var transac = web3.eth.getTransactionFromBlock(result);
                console.log('Transac : ' + JSON.stringify(transac, null, 4));
                if (transac) {
                    var receipt = web3.eth.getTransactionReceipt(transac.hash);
                    console.log('Receipt : ' + JSON.stringify(receipt, null, 4));
                    if (receipt) {
                        _this.addStat(_this.parseTransac(transac));
                    }
                }
            }
        });
    };
    AppComponent.prototype.parseTransac = function (transac) {
        var sender = null;
        var receiver = null;
        var transaction = null;
        sender = this.appService.parseObj({
            address: transac.from,
            name: '',
            balance: web3.eth.getBalance(transac.from).plus(2).toString(10)
        }, User_1.User);
        receiver = this.appService.parseObj({
            address: transac.to,
            name: '',
            balance: web3.eth.getBalance(transac.to).plus(2).toString(10)
        }, User_1.User);
        transaction = this.appService.parseObj({
            sender: sender,
            receiver: receiver,
            amount: transac.value.c[0]
        }, Transaction_1.Transaction);
        return transaction;
    };
    AppComponent.prototype.addStat = function (transaction) {
        this.addTransaction(transaction);
        setTimeout(function () {
            TweenMax.to('.ui:first-child', 0.6, { height: 0, reversed: true, ease: Sine.easeOut });
            TweenMax.to('.ui:first-child .transac_box', 0.6, { opacity: 1, delay: 0.6 });
            TweenMax.to('.ui:first-child .transaction', 0.6, { opacity: 1, delay: 0.6 });
        }, 1);
    };
    AppComponent.prototype.addTransaction = function (transaction) {
        this.transactions.unshift(transaction);
        if (this.transactions.length >= 5) {
            this.transactions.pop();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'block-dashboard',
            templateUrl: './app.component.html',
            providers: [browser_adapter_1.BrowserDomAdapter, app_service_1.AppService],
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, browser_adapter_1.BrowserDomAdapter])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map