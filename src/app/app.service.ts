/*

    Service permettant de parser un objet JS en objet de class et de récupérer le nom du User
    @author : Joël CHRABIE

*/

import { Injectable }    from '@angular/core';

import { NameService} from './name/name.service';
import { User } from './class/User';

@Injectable()
export class AppService {

  constructor(
    private ns: NameService
  ) { }

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
        if (typeof json[prop] === 'object') {
            instance[prop] = this.parseObj(json[prop], type);
        } else {
            instance[prop] = json[prop];
        }
    }
    return instance;
  }

  /*
    @Param:   users: tableau d'utilisateurs sans leur nom
    Utilisation du service 'NameService' pour récupérer le nom via l'addresse de l'utilisateur
  */
  getName(users: User[]): void {
    for (let prop in users) {
      if (!isNaN(parseFloat(prop))) {
        this.ns.getNameByAddress(users[prop].address).toPromise().then(responce => users[prop]['name'] = responce);
      }
    }
  }
}
