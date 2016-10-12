/*import { TestBed } from '@angular/core/testing';
import { Output, EventEmitter }    from '@angular/core';

import { GraphComponent } from './graph.component';

import { AppService } from '../app.service';
declare var google: any;

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

  describe('Testing Component Graph', () => {

    let component: GraphComponent;
    let element;
    let fixture;

    beforeEach((done) => {
      TestBed.configureTestingModule( {
        declarations: [GraphComponent, google]
      });

      // Override du template
      TestBed.overrideComponent(GraphComponent, {
        set: {
          template: `
            <div class="chart" >
                <div id="chartJim"></div>
            </div>
          `,
          providers: [
            { provide: AppService, useClass: MockAppService }
          ]
        }
      });

      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(GraphComponent);

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
});*/
