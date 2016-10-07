/*
    Service permettant de parser un objet JS en objet de class et de récupérer le nom du User
    @author : Joël CHRABIE

*/

import { Injectable, Output, EventEmitter }    from '@angular/core';

import { NameService} from './name/name.service';
import { User } from './class/User';
import { Transaction } from './class/Transaction';

import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AppService {

  @Output() newTransac = new EventEmitter(true);

  constructor (
    private ns: NameService,
    private route: ActivatedRoute
  ) { }

  /* 
    @Param: transaction: Transaction a emetre
    Emition d'un Event lors d'une nouvelle transaction 
  */
  setTransaction (transaction: Transaction) {
    this.newTransac.emit(transaction);
  }

  /*
    @Param:  json: Objet JS a parser
             type: type de l'objet a parser
    @Return: Objet parser dans le type donné en entree
  */
  parseObj(json, type) {
    let instance = new type();
    for (let prop in json) {
        if (!json.hasOwnProperty(prop)) {
            continue;
        }
        if ( typeof json[prop] === 'object' && ( typeof json[prop] === 'string' || 
          typeof json[prop] === 'number' || typeof json[prop] === 'Date' ) ) {
            instance[prop] = this.parseObj(json[prop], type);
        } else {
            instance[prop] = json[prop];
        }
    }
    return instance;
  }

  /*
    @Param:  user: utilisateur sans nom
    @Return: Promise
    Utilisation du service 'NameService' pour recuperer le nom via l'addresse de l'utilisateur
  */
  getName(user: User): Promise<string> {
      return this.ns.getNameByAddress(user.address);
  }

  // Retourne tous les noms d'utilisateur
  getNames(): Promise<string[]> {
      return this.ns.getNames().toPromise();
  }

  // Retour l'addresse IP de la Blockchaine
  getIp(): Promise<string>  {
      return this.ns.getIp().toPromise();
  }

  // Retour Si on est en mode démo ou mode Blockchain
  getUrlData(): boolean  {
      return Boolean(this.route.snapshot.data['demo']);
  }
}
