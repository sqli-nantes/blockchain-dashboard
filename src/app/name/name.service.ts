/*

    Service permettant de mettre un nom sur une addresse
    @author : Joël CHRABIE

*/

import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class NameService {
	constructor (private http: Http) {}

  getNameByAddress( address: string ): Observable<string>  {
  	return this.http.get('http://localhost:80/ad/' + address)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getNames(): Observable<string[]>  {
  	return this.http.get('http://localhost:80')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || 'Contrat Choupette';
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
