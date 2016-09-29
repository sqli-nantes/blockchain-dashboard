import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { NameService } from './name/name.service';

import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

class MockAppService {
  public users: Array<string> = ['John', 'Steve'];
}


describe('App', () => {
  let component: AppComponent;
  let transaction;
  let element;
  let fixture;

  beforeEach(() => {
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
  });

  it('initialize the AppComponent', async(() => {
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
    });
  }));

  describe('Testing Component app', () => {
    it('can initialize the Component App', () => {
      expect(component).not.toBeNull();
      expect(element).not.toBeNull();
    });

    describe('Testing function RandomTransac', () => {
      it('must return a Transaction with a sender, a receiver, an amount and a date', () => {
        transaction = component.randomTransac();

        expect(transaction).not.toBeNull();
        expect(transaction.sender).not.toBeNull();
        expect(transaction.receiver).not.toBeNull();
        expect(transaction.amount).not.toBeNull();
        expect(transaction.time).not.toBeNull();

        expect(transaction.amount).toBeGreaterThan(0);
      });
    });

    describe('Testing function addTransaction', () => {
      it('must add a transaction in the var transactions', () => {
        component.addTransaction(transaction);

        expect(component.transactions.length).toBeGreaterThan(0);
        expect(component.transactions).toContain(transaction);
      });
    });
  });
});
