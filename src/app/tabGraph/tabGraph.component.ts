/*

    Composant du tabulaire de graphiques
    @author : Joël CHRABIE

*/

// Import des librairies, service, ...

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-graph',
  templateUrl: './tabGraph.component.html',
    styleUrls: ['./tabGraph.component.scss']
})


export class TabGraphComponent implements OnInit {
  @Input() users;

  ngOnInit() {

  }
}
