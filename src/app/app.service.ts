/*

    Service permettant de parser un objet JS en objet de class et de récupérer le nom du User
    @author : Joël CHRABIE

*/

import { Injectable, Output, EventEmitter }    from '@angular/core';

import { NameService} from './name/name.service';
import { User } from './class/User';
import { Transaction } from './class/Transaction';

@Injectable()
export class AppService {

  @Output() newTransac = new EventEmitter(true);

  constructor (private ns: NameService) { }

  setTransaction (transaction: Transaction) {
    this.newTransac.emit(transaction);
  }

  /*
    @Param:  json: Objet JS à parser
             type: type de l'objet à parser
    @Return: Objet parser dans le type donné en entrée
  */
  parseObj(json, type) {
    let instance = new type();
    for (let prop in json) {
        if (!json.hasOwnProperty(prop)) {
            continue;
        }
        if (typeof json[prop] === 'object' && (typeof json[prop] === 'string' || 
          typeof json[prop] === 'number' || typeof json[prop] === 'date' || typeof json[prop] === 'Date')) {
            instance[prop] = this.parseObj(json[prop], type);
        } else {
            instance[prop] = json[prop];
        }
    }
    return instance;
  }

  /*
    @Param:   users: utilisateur sans nom
    Utilisation du service 'NameService' pour récupérer le nom via l'addresse de l'utilisateur
  */
  getName(user: User): any {
      return this.ns.getNameByAddress(user.address).toPromise().then(responce => {
        return responce['_body'];
      });
  }
}
