/*

    Composant pricipal de l'application
    @author : Joël CHRABIE

*/
"use strict";
// Import des librairies, service, ...
var core_1 = require('@angular/core');
var User_1 = require('./class/User');
var Transaction_1 = require('./class/Transaction');
var app_service_1 = require('./app.service');
var enode_const_1 = require('./utils/enode.const');
var _ = require('lodash');
var web3 = require('./utils/web3IPCExtension').web3;
// Effets d'animations GSAP avec TweenMax
require('gsap');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.transactions = [];
        this.users = [
            { address: '0xdb3b05cdc78ea632cb3f6816f9c14109070cc3b4', name: 'Choupette', balance: 2000 },
            { address: '0xe9bd4d7c245f4b14388f2bc71a09b0264057c31e', name: 'Jim', balance: 2000 },
            { address: '0xe9bd4d7c245f4b14388f2bc71a09b0264057b54f', name: 'Seraphin', balance: 2000 },
        ];
    }
    // Fonction lancée lors de l'initialisation du composant: connection à la blockchaine et mise à l'écoute des block en transit
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.blockchainConnect();
        // this.blockchainFilter();
        setInterval(function () {
            _this.fakeTransaction();
            _this.time = new Date();
        }, this.randomize(20) * 1000);
    };
    AppComponent.prototype.fakeTransaction = function () {
        this.addStat(this.randomTransac());
    };
    // Fonction de connection à la blockchain
    AppComponent.prototype.blockchainConnect = function () {
        web3.setProvider(new web3.providers.HttpProvider('http://10.33.44.81:8547'));
        web3.admin.addPeer(enode_const_1.ENODE);
        web3.eth.defaultAccount = web3.eth.accounts[0];
    };
    // Fonction de souscription à l'évennement de block sur la blockchaine
    AppComponent.prototype.blockchainFilter = function () {
        var _this = this;
        var filter = web3.eth.filter('latest');
        filter.watch(function (error, result) {
            if (!error) {
                var transac = web3.eth.getTransactionFromBlock(result);
                if (transac) {
                    var receipt = web3.eth.getTransactionReceipt(transac.hash);
                    if (receipt) {
                        _this.addStat(_this.parseTransac(transac));
                    }
                }
            }
        });
    };
    /* Fonction de parsing d'un block de transaction en objet de class 'Transaction' et 'User' et récupération des noms des
    utilisateur dans un fichier externe*/
    AppComponent.prototype.parseTransac = function (transac) {
        var sender = null;
        var receiver = null;
        var transaction = null;
        sender = this.appService.parseObj({
            address: transac.from,
            name: '',
            balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.from).plus(2).toString(10)
        }, User_1.User);
        receiver = this.appService.parseObj({
            address: transac.to,
            name: '',
            balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.to).plus(2).toString(10)
        }, User_1.User);
        sender.name = this.appService.getName(sender);
        receiver.name = this.appService.getName(receiver);
        transaction = this.appService.parseObj({
            sender: sender,
            receiver: receiver,
            amount: transac.value.c[0],
        }, Transaction_1.Transaction);
        return transaction;
    };
    AppComponent.prototype.randomTransac = function () {
        var sender;
        var receiver;
        var amount;
        var transaction;
        do {
            sender = this.users[this.randomize(this.users.length)];
            receiver = this.users[this.randomize(this.users.length)];
            amount = this.randomize(2000);
        } while (sender === receiver || sender.balance - amount < 0);
        sender = this.appService.parseObj(sender, User_1.User);
        receiver = this.appService.parseObj(receiver, User_1.User);
        transaction = this.appService.parseObj({
            sender: sender,
            receiver: receiver,
            amount: this.randomize(2000),
            time: new Date()
        }, Transaction_1.Transaction);
        transaction.sender.balance -= transaction.amount;
        transaction.receiver.balance += transaction.amount;
        var indexSender = _.findIndex(this.users, ['address', transaction.sender.address]);
        var indexReceiver = _.findIndex(this.users, ['address', transaction.receiver.address]);
        this.users[indexSender].balance = transaction.sender.balance;
        this.users[indexReceiver].balance = transaction.receiver.balance;
        return transaction;
    };
    // Fonction d'animation de l'apparition d'une nouvelle transaction
    AppComponent.prototype.addStat = function (transaction) {
        this.addTransaction(transaction);
        setTimeout(function () {
            TweenMax.to('.ui:first-child', 0.6, { height: 0, reversed: true, ease: Sine.easeOut });
            TweenMax.to('.ui:first-child .transac_box', 0.6, { opacity: 1, delay: 0.6 });
            TweenMax.to('.ui:first-child .transaction', 0.6, { opacity: 1, delay: 0.6 });
        }, 1);
    };
    /* Fonction d'ajout d'une transaction dans le haut de la pile et suppression de la plus ancienne
    transaction si le tableau dépasse les 5 valeurs */
    AppComponent.prototype.addTransaction = function (transaction) {
        this.transactions.unshift(transaction);
        this.appService.setTransaction(transaction);
        if (this.transactions.length >= 5) {
            this.transactions.pop();
        }
    };
    AppComponent.prototype.randomize = function (num) {
        var randomNum = Math.floor(Math.random() * num);
        return randomNum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'block-dashboard',
            templateUrl: './app.component.html',
            providers: [app_service_1.AppService],
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map