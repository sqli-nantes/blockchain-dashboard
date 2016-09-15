/*

    Composant de la flèche
    @author : Joël CHRABIE

*/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./_arrow.scss']
})

export class ArrowComponent implements OnInit {
  @Input() rotate: string;
  plus: boolean;

  ngOnInit() {
    if (this.rotate === 'true') {
      this.plus = true;
    } else {
      this.plus = false;
    }
  }
}
