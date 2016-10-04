/*

    Service permettant de mettre un nom sur une addresse
    @author : Joël CHRABIE

*/

import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import * as _ from 'lodash';

@Injectable()
export class NameService {
  constructor (private http: Http) {}

  getNameByAddress( address: string ): Promise<any>  {
      return this.getNames().toPromise().then(responce => {
        let user = _.find(responce, ['address', address]);
        return user['name'];
      });
  }

  getNames(): Observable<string[]>  {
    return this.http.get('./res/json/names.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getIp(): Observable<string>  {
    return this.http.get('./res/json/ipRPI.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData (res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
