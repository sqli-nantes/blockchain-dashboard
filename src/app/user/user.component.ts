/*

    Composant de block d'utilisateur
    @author : Joël CHRABIE

*/

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../class/User';
let Numeral = require('numeral');

@Component({
  selector: 'user-information',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  // Récupération de l'utilisateur, du montant de la transac et du type (sender ou receiver)  
  @Input() user: User;
  @Input() amount: number;
  @Input() type: string;

  previousSolde: number;
  currency = 'Nantes';

  ngOnInit() {
    this.previousSolde = this.type === 'sender' ?
    Numeral().unformat(this.user.balance) + Numeral().unformat(this.amount) :
    Numeral().unformat(this.user.balance) - Numeral().unformat(this.amount);
    console.log(this.previousSolde);
    console.log(typeof(this.previousSolde));
  }

  /*
    Fonction qui permet de modifier dynamiquement la currency
    TODO: Comprendre pourquoi le changement dynamique de la monaie ne fonctionne pas
  */
  changeCurrency(currency) {
    this.currency = currency;
  }
  /*
    return currency
  */
  get Currency() {
    return this.currency;
  }

}
