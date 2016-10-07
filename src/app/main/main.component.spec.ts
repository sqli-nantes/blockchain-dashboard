import { TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Data } from '@angular/router';

import { MainComponent } from './main.component';

import { AppService } from '../app.service';
import { NameService } from '../name/name.service';

import { User } from '../class/User';
import { Transaction } from '../class/Transaction';

import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

class MockAppService {
  newTransac = new EventEmitter(true);
  setTransaction = function (transaction: Transaction) { this.newTransac.emit(transaction); };
  parseObj = function (json, type) { return type; };
  getName = function (user: User) { return 'Jim'; };
}

class MockActivatedRoute {
  constructor (snapshot: MockActivatedRouteSnapshot) { }
}

class MockActivatedRouteSnapshot {
  public data: Data;
  constructor (data: Data) {
    this.data = data;
  }
}

describe('BlockDash tests', () => {

  describe('Testing Component app', () => {

    let component: MainComponent;
    let element;
    let fixture;

    beforeEach((done) => {
      TestBed.configureTestingModule( {
        declarations: [MainComponent],
        providers: [
          MockBackend,
          MockActivatedRouteSnapshot,
          BaseRequestOptions,
          NameService,
          { provide: AppService, useClass: MockAppService },
          { 
            provide: ActivatedRouteSnapshot, 
            useFactory : (data: Data) => {
              data['demo'] = true;
              return new MockActivatedRouteSnapshot(data);
            }
          },
          {
            provide: Http,
            useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
          { 
            provide: ActivatedRoute,
            useFactory: (snapshot: MockActivatedRouteSnapshot) => {
              return new MockActivatedRoute(snapshot);
            },
            deps: [MockActivatedRouteSnapshot]
          }
        ]
      });

      // Override du template
      TestBed.overrideComponent(MainComponent, {
        set: {
          template: '<div *ngFor="let t of transactions">{{t}}</div>'
        }
      });

      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(MainComponent);

        // Access the dependency injected component instance
        component = fixture.componentInstance;

        // Access the element
        element = fixture.nativeElement;

        // Detect changes as necessary
        fixture.detectChanges();
        done();
      });
    });

    it('can be initialized', () => {
      console.log(component);
      expect(component).not.toBeNull();
      expect(element).not.toBeNull();
    });
  });
});
