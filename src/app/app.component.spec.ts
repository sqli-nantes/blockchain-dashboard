import { TestBed, async } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { NameService } from './name/name.service';

import { User } from './class/User';
import { Transaction } from './class/Transaction';

import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

class MockAppService {
  newTransac = new EventEmitter(true);
  setTransaction = function (transaction: Transaction) { this.newTransac.emit(transaction); }
  parseObj = function (json, type) { return type }
  getName = function (user: User) { return 'Jim' }
}


describe('BlockDash tests', () => {

  describe('Testing Component app', () => {

    let component: AppComponent;
    let transaction;
    let element;
    let fixture;
    let originalTimeout;
    
    beforeEach((done) => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
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
          NameService
        ]
      });

      // Overrides here, if you need them
      TestBed.overrideComponent(AppComponent, {
        set: {
          template: '<div *ngFor="let t of transactions">{{t}}</div>'
        }
      });

      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        // Access the dependency injected component instance
        component = fixture.componentInstance;

        expect(typeof component.randomize(5)).toBe('number');

        // Access the element
        element = fixture.nativeElement;

        // Detect changes as necessary
        fixture.detectChanges();
        done();
      }).catch(error => {
        expect(false).toBe(true);
        done();
      });

    });

    it('can be initialized', () => {
      expect(component).not.toBeNull();
      expect(element).not.toBeNull();
    });
  });
});
