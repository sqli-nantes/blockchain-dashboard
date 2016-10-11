import { TestBed } from '@angular/core/testing';
import { Output, EventEmitter }    from '@angular/core';

import { TransListComponent } from './transList.component';

import { AppService } from '../app.service';

import { User } from '../class/User';
import { Transaction } from '../class/Transaction';

class MockAppService {

  constructor () { }

  @Output() newTransac = new EventEmitter(true);
  setTransaction = transaction => { this.newTransac.emit(transaction); };
  parseObj = (json, type) => { return type; };
  getName = user => {
    return new Promise((resolve, reject) => {
      resolve('Jim');
    });
  };
  getNames = users => {
    return new Promise((resolve, reject) => {
      resolve(['Jim', 'Choupette']);
    });
  };
  getUrlData = () => {
    return true;
  }
}

describe('BlockDash tests', () => {

  describe('Testing Component Trans List', () => {

    let component: TransListComponent;
    let element;
    let fixture;

    beforeEach((done) => {
      TestBed.configureTestingModule( {
        declarations: [TransListComponent]
      });

      // Override du template
      TestBed.overrideComponent(TransListComponent, {
        set: {
          providers: [
            { provide: AppService, useClass: MockAppService }
          ]
        }
      });

      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TransListComponent);

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
      expect(component).not.toBeNull();
      expect(element).not.toBeNull();
    });
  });
});
