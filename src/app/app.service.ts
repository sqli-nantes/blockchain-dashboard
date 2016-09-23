/*

    Service permettant de parser un objet JS en objet de class et de récupérer le nom du User
    @author : Joël CHRABIE

*/

import { Injectable }    from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

import { NameService} from './name/name.service';
import { User } from './class/User';
import { Transaction } from './class/Transaction';

@Injectable()
export class AppService {

  private _transactions: Array<Transaction>;
  observable: Observable<any>;
  observer: Observer<any>;

  constructor (private ns: NameService) {
      this.observable = Observable.create((observer: Observer<any>) => {
      this.observer = observer;
    }).share();
  }


  broadcast(event) {
    this.observer.next(event);
  }

  on(eventName, callback) {
    this.observable.filter((event) => {
      return event.name === eventName;
    }).subscribe(callback);
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
        if (typeof json[prop] === 'object' && (typeof json[prop] === 'string' || typeof json[prop] === 'number')) {
            instance[prop] = this.parseObj(json[prop], type);
        } else {
            instance[prop] = json[prop];
        }
    }
    return instance;
  }

  public getTansactions(): Array<Transaction> {
    return this._transactions;
  }

  public setTransactions (ts: Array<Transaction>) {
    this._transactions = ts;
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
