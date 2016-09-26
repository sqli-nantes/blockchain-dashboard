/*

    Composant de liste de transaction
    @author : Joël CHRABIE

*/

// Import des librairies, service, ...
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

// Effets d'animations GSAP avec TweenMax

import 'gsap';
declare let TweenMax: any;
declare let Sine: any;

@Component({
  selector: 'trans-list',
  templateUrl: './transList.component.html',
  styleUrls: ['./transList.component.scss'],
})

export class TransListComponent implements OnInit {
  @Input() transactions;
  users = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }
}
