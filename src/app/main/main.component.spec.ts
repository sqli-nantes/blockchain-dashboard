import { TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { MainComponent } from './main.component';

import { AppService } from '../app.service';

import { User } from '../class/User';
import { Transaction } from '../class/Transaction';

class MockAppService {

  constructor () { }

  newTransac = new EventEmitter(true);
  setTransaction = transaction => { this.newTransac.emit(transaction); };
  parseObj = (json, type) => { return type; };
  getName = user => { 
    return new Promise((resolve, reject) => {
      resolve('Jim');
    }) 
  };
  getNames = users => { 
    return new Promise((resolve, reject) => {
      resolve(['Jim', 'Choupette']);
    })
  };
  getUrlData = () => { return true; }
}

describe('BlockDash tests', () => {

  describe('Testing Component app', () => {

    let component: MainComponent;
    let element;
    let fixture;
    beforeEach((done) => {
      TestBed.configureTestingModule( {
        declarations: [MainComponent]
      });

      // Override du template
      TestBed.overrideComponent(MainComponent, {
        set: {
          template: '<div *ngFor="let t of transactions">{{t}}</div>',
          providers: [
            { provide: AppService, useClass: MockAppService }
          ]
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
