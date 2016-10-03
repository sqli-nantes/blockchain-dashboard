/*

    Composant pricipal de l'application
    @author : Joël CHRABIE

*/

// Import des librairies, service, ...
import { Component, AfterViewInit } from '@angular/core';
import { User } from './class/User';
import { Transaction } from './class/Transaction';


import { AppService } from './app.service';

import { ENODE } from './utils/enode.const';

import * as _ from 'lodash';
let web3 = require('./utils/web3IPCExtension').web3;

// Effets d'animations GSAP avec TweenMax

import 'gsap';
declare let TweenMax: any;
declare let Sine: any;

@Component({
  selector: 'block-dashboard',
  templateUrl: './app.html',
  providers: [ AppService ],
  styleUrls: ['./_app.scss']
})

export class AppComponent implements AfterViewInit {
  time: Date;

  users = [
    { address: '0xdb3b05cdc78ea632cb3f6816f9c14109070cc3b4', name: 'Choupette', balance: 2000 },
    { address: '0xe9bd4d7c245f4b14388f2bc71a09b0264057c31e', name: 'Jim', balance: 2000 },
    { address: '0xe9bd4d7c245f4b14388f2bc71a09b0264057b54f', name: 'Seraphin', balance: 2000 },
  ];

  constructor( private appService: AppService ) {  }

  // Fonction lancée lors de l'initialisation du composant: connection à la blockchaine et mise à 
  // l'écoute des blocks en transit, et dans le cas de démo, création d'une fausse transaction à interval régulier
  ngAfterViewInit() {
    // this.blockchainConnect();
    // this.blockchainFilter();
    this.fakeTransaction(5000);
  }

  fakeTransaction(ms: number) {
    setInterval(() => {
      this.randomTransac();
    }, ms);
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
    filter.watch((error,result) => {
      if (!error) {
        let transac = web3.eth.getTransactionFromBlock(result);
        if (transac) {
          let receipt = web3.eth.getTransactionReceipt(transac.hash);
          if (receipt) {
            this.parseTransac(transac);
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
      balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.from).plus(2).toString(10)
    }, User);

    receiver = this.appService.parseObj({
      address: transac.to,
      name: '',
      balance: transac.fake === true ? 2000 : web3.eth.getBalance(transac.to).plus(2).toString(10)
    }, User);

    sender.name = this.appService.getName(sender);
    receiver.name = this.appService.getName(receiver);

    transaction = this.appService.parseObj({
      sender: sender,
      receiver: receiver,
      amount: transac.value.c[0],
    }, Transaction);

    this.appService.setTransaction(transaction);
  }

  randomTransac(): any {
    let sender: User;
    let receiver: User;
    let amount: number;
    let transaction;

    do {
      sender = this.users[this.randomize(this.users.length)];
      receiver = this.users[this.randomize(this.users.length)];
      amount = this.randomize(2000);
    } while (sender === receiver || sender.balance - amount < 0);

    sender = this.appService.parseObj(sender, User);
    receiver = this.appService.parseObj(receiver, User);

    transaction = this.appService.parseObj({
      sender: sender,
      receiver: receiver,
      amount: this.randomize(2000),
      time: new Date()
    }, Transaction);

    transaction.sender.balance -= transaction.amount;
    transaction.receiver.balance += transaction.amount;

    let indexSender = _.findIndex(this.users, ['address', transaction.sender.address]);
    let indexReceiver = _.findIndex(this.users, ['address', transaction.receiver.address]);

    this.users[indexSender].balance = transaction.sender.balance;
    this.users[indexReceiver].balance = transaction.receiver.balance;

    this.appService.setTransaction(transaction);
  }

  randomize(num: number): number {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
  }
}
