/*

    Composant de liste de transaction
    @author : Joël CHRABIE

*/
"use strict";
// Import des librairies, service, ...
var core_1 = require('@angular/core');
var TransListComponent = (function () {
    function TransListComponent() {
    }
    TransListComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.fakeTransaction();
            _this.time = new Date();
        }, 10000);
    };
    TransListComponent.prototype.fakeTransaction = function () {
        var transac = {
            from: '0xe9bd4d7c245f4b14388f2bc71a09b0264057c31e',
            to: '0xdb3b05cdc78ea632cb3f6816f9c14109070cc3b4',
            value: {
                c: [500]
            },
            fake: true,
        };
        this.addStat(this.parseTransac(transac));
    }; /* Fonction de parsing d'un block de transaction en objet de class 'Transaction' et 'User' et récupération des noms des
    utilisateur dans un fichier externe*/
    TransListComponent.prototype.parseTransac = function (transac) {
        var sender = null;
        var receiver = null;
        var transaction = null;
        sender = this.appService.parseObj({
            address: transac.from,
            name: '',
            balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.from).plus(2).toString(10)
        }, User);
        receiver = this.appService.parseObj({
            address: transac.to,
            name: '',
            balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.to).plus(2).toString(10)
        }, User);
        this.appService.getName([sender, receiver]);
        transaction = this.appService.parseObj({
            sender: sender,
            receiver: receiver,
            amount: transac.value.c[0],
        }, Transaction);
        return transaction;
    };
    // Fonction d'animation de l'apparition d'une nouvelle transaction
    TransListComponent.prototype.addStat = function (transaction) {
        this.addTransaction(transaction);
        setTimeout(function () {
            TweenMax.to('.ui:first-child', 0.6, { height: 0, reversed: true, ease: Sine.easeOut });
            TweenMax.to('.ui:first-child .transac_box', 0.6, { opacity: 1, delay: 0.6 });
            TweenMax.to('.ui:first-child .transaction', 0.6, { opacity: 1, delay: 0.6 });
        }, 1);
    };
    /* Fonction d'ajout d'une transaction dans le haut de la pile et suppression de la plus ancienne
    transaction si le tableau dépasse les 5 valeurs */
    TransListComponent.prototype.addTransaction = function (transaction) {
        this.transactions.unshift(transaction);
        if (this.transactions.length >= 5) {
            this.transactions.pop();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TransListComponent.prototype, "transactions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TransListComponent.prototype, "time", void 0);
    TransListComponent = __decorate([
        core_1.Component({
            selector: 'trans-list',
            templateUrl: './transList.component.html',
            styleUrls: ['./transList.component.scss'],
        }), 
        __metadata('design:paramtypes', [])
    ], TransListComponent);
    return TransListComponent;
}());
exports.TransListComponent = TransListComponent;
//# sourceMappingURL=transList.component.js.map