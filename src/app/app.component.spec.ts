import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './shared';
import { AppComponent } from './app.component';

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [ApiService, provideRoutes([])]
    });
  });

  describe('Testing Component app', () => {
    it('test Randomize', () => {
      let app = new AppComponent();
      let randomize = app.randomize(5);
      expect(randomize).toBeGreaterThan(-1);
      expect(randomize).toBeLessThan(6);
      expect(randomize).toMatch(/\d{1,}/);      
    });
  });

  describe('Testing math', () => {
    it('multiplying should work', () => {
      expect(4 * 4).toEqual(16);
    });
  });
});
