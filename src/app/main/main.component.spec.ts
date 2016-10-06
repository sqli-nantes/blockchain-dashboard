import { TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MainComponent } from './main.component';

import { AppService } from '../app.service';
import { NameService } from '../name/name.service';

import { User } from '../class/User';
import { Transaction } from '../class/Transaction';
import { Observable }     from 'rxjs/Observable';

import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

class MockAppService {
  newTransac = new EventEmitter(true);
  setTransaction = function (transaction: Transaction) { this.newTransac.emit(transaction); };
  parseObj = function (json, type) { return type; };
  getName = function (user: User) { return 'Jim'; };
}

class MockActivatedRoute extends ActivatedRoute {}

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
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
          {
            provide: (AppService, { useClass: MockAppService })
          },
          {
            provide: ActivatedRoute,
            useFactory: () => {
              return new ActivatedRoute();
            }
          },
          {
            provide: Router,
            useFactory: () => {
              return new Router(null,null,null,null,null,null,null,null);
            }
          },
          NameService
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
      })

    });

    it('can be initialized', () => {
      expect(component).not.toBeNull();
      expect(element).not.toBeNull();
    });
  });
});
