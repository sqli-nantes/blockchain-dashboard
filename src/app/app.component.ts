/*

    Composant pricipal de l'application
    @author : Joël CHRABIE

*/

// Import des librairies, service, ...
import { Component, OnInit } from '@angular/core';
import { User } from './class/User';
import { Transaction } from './class/Transaction';

import { AppService } from './app.service';

import { ENODE } from './utils/enode.const';

let web3 = require('./utils/web3IPCExtension').web3;

// Effets d'animations GSAP avec TweenMax

import 'gsap';
declare let TweenMax: any;
declare let Sine: any;

@Component({
  selector: 'block-dashboard',
  templateUrl: './app.component.html',
  providers: [ AppService ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  transactions = [];

  constructor(
    private appService: AppService
  ) { }

  // Fonction lancée lors de l'initialisation du composant: connection à la blockchaine et mise à l'écoute des block en transit
  ngOnInit() {
    // this.blockchainConnect();
    // this.blockchainFilter();
    setInterval(() =>{
      this.fakeTransaction();
    }, 10000)
    
  }

  fakeTransaction() {
    let transac = {
      from: '0xe9bd4d7c245f4b14388f2bc71a09b0264057c31e',
      to: '0xdb3b05cdc78ea632cb3f6816f9c14109070cc3b4',
      value : {
        c : [ 500 ]
      },
      fake : true
    }
    this.addStat(this.parseTransac(transac));
  }

  // Fonction de connection à la blockchain
  blockchainConnect() {
    web3.setProvider(new web3.providers.HttpProvider('http://10.33.44.81:8547'));
    web3.admin.addPeer(ENODE);
    web3.eth.defaultAccount = web3.eth.accounts[0];
  }

  // Fonction de souscription à l'évennement de block sur la blockchaine
  blockchainFilter() {
    let filter = web3.eth.filter('latest');
    filter.watch((error, result) => {
      if (!error) {
        let transac = web3.eth.getTransactionFromBlock(result);
        if (transac) {
          let receipt = web3.eth.getTransactionReceipt(transac.hash);
          if (receipt) {
            this.addStat(this.parseTransac(transac));
          }
        }
      }
    });
  }

  /* Fonction de parsing d'un block de transaction en objet de class 'Transaction' et 'User' et récupération des noms des 
  utilisateur dans un fichier externe*/
  parseTransac (transac: any) {
    let sender: User = null;
    let receiver: User = null;
    let transaction: Transaction = null;

    sender = this.appService.parseObj({
      address: transac.from,
      name: '',
      balance: transac.fake === true? 2000 : web3.eth.getBalance(transac.from).plus(2).toString(10)
    }, User);

    receiver = this.appService.parseObj({
      address: transac.to,
      name: '',
      balance: transac.fake === true? 2000 : web3.eth.getBalance(transac.to).plus(2).toString(10)
    }, User);

    this.appService.getName([sender, receiver]);

    transaction = this.appService.parseObj({
      sender: sender,
      receiver: receiver,
      amount: transac.value.c[0]
    }, Transaction);

    return transaction;
  }

  // Fonction d'animation de l'apparition d'une nouvelle transaction
  addStat (transaction: Transaction): void {
    this.addTransaction(transaction);

    setTimeout(() => {
      TweenMax.to('.ui:first-child', 0.6, {height: 0, reversed: true, ease: Sine.easeOut});
      TweenMax.to('.ui:first-child .transac_box', 0.6, {opacity: 1, delay: 0.6});
      TweenMax.to('.ui:first-child .transaction', 0.6, {opacity: 1, delay: 0.6});
    }, 1);
  }

  /* Fonction d'ajout d'une transaction dans le haut de la pile et suppression de la plus ancienne 
  transaction si le tableau dépasse les 5 valeurs */
  addTransaction (transaction: Transaction) {
    this.transactions.unshift(transaction);

    if (this.transactions.length >= 5) {
      this.transactions.pop();
    }
  }
}
