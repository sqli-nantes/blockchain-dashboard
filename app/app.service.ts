import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

import { NameService} from './name.service'
import { User } from './User';

import * as _ from 'lodash';

@Injectable()
export class AppService {
  private dataUrl = 'app/users';  // URL to web api
  private users:User[];

  constructor(
    private http: Http,
    private ns:NameService
  ) { }

  getUsers(): Promise<any> {
    var users
    return this.http.get(this.dataUrl).toPromise()
    .then(response => 
       this.parseObj(response.json().data,User)
    )
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  parseObj(json,type) {
    var instance = new type();
    for(var prop in json) {
        if(!json.hasOwnProperty(prop)) {
            continue;
        }
        if(typeof json[prop] === 'object') {
            instance[prop] = this.parseObj(json[prop], type);
        } else {
            instance[prop] = json[prop];
        }
    }
    this.getName(instance);
    return instance;
  }

  getName(users:User[]): void{
    for(let prop in users) {
      if(!isNaN(parseFloat(prop))) {
        users[prop]['name']=this.ns.getNameByAddress(users[prop].address);
      }
    }
  }

}
