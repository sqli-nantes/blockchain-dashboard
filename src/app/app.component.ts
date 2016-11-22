/*

    Composant pricipal de l'application
    @author : Joël CHRABIE

*/

// Import des librairies, services, ...
import { Component } from '@angular/core';

@Component({
  selector: 'block-dashboard',
  template: `<router-outlet id="ui_container"></router-outlet>`
})

export class AppComponent {
  constructor() { }
}
