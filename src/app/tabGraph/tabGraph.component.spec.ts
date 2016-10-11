import { TestBed } from '@angular/core/testing';

import { TabGraphComponent } from './tabGraph.component';

import { AppService } from '../app.service';

import { User } from '../class/User';
import { Transaction } from '../class/Transaction';


describe('BlockDash tests', () => {

  describe('Testing Component Tab Graph', () => {

    let component: TabGraphComponent;
    let element;
    let fixture;

    beforeEach((done) => {
      TestBed.configureTestingModule( {
        declarations: [TabGraphComponent]
      });

      // Override du template
      TestBed.overrideComponent(TabGraphComponent, {
        set: {
          template: '<div *ngFor="let u of users">{{u}}</div>'
        }
      });

      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TabGraphComponent);

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
