/*

    Composant de liste de transaction
    @author : Joël CHRABIE

*/

// Import des librairies, service, ...
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Transaction } from '../class/Transaction';


// Effets d'animations GSAP avec TweenMax

import 'gsap';
declare let TweenMax: any;
declare let Sine: any;

@Component({
  selector: 'trans-list',
  templateUrl: './transList.html',
  styleUrls: ['./_transList.scss'],
})

export class TransListComponent implements OnInit {
  transactions: Array<Transaction> = [];
  users = [];
  lastBlocks: Array<Number> = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.newTransac.subscribe(transaction => this.addStat(transaction));
  }


  // Fonction d'animation de l'apparition d'une nouvelle transaction
  addStat (transaction: Transaction): void {

	console.log(transaction.blockHash);

    for (var i = 0; i < this.lastBlocks.length; ++i) {
      if(transaction.blockHash == this.lastBlocks[i])
      {
        console.log("Transaction already known")
        return;
      }
    }

    this.lastBlocks.unshift(transaction.blockHash);
    if(this.lastBlocks.length >= 10)
    {
      this.lastBlocks.pop();
    }

    this.addTransaction(transaction);
    console.log(transaction);

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
