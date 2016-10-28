/*

    Graph à gauche de l'appli
    @author : Joël CHRABIE

*/
import { Component, Input, OnInit } from '@angular/core';

import { OPTIONS } from './graph.options';
import { AppService } from '../app.service';

import { Transaction } from '../class/Transaction';
import * as _ from 'lodash';
declare var google: any;

@Component({
  selector: 'graph',
  styleUrls: ['./_graph.scss'],
  templateUrl: './graph.html'
})

// ,
//   template: `
//     <div class="chart" >
//         <p>{{user.address}}</p>
//         <div [attr.id]="'chart' + user.name"></div>
//     </div>
//   `

export class GraphComponent extends OnInit {
  private googleLoaded: any;
  private options;
  private data;
  private chart;
  @Input() user;

  constructor (private service: AppService) {
    super();
  }

  getGoogle() {
      return google;
  }

  // Initialisation des packages au lancement du composant et souscription à l'évennement de nouvelle transaction
  ngOnInit() {
    if (!this.googleLoaded) {
      this.googleLoaded = true;
      google.charts.load('current', {packages: ['corechart', 'line']});
    }
    google.charts.setOnLoadCallback(() => {
      this.drawGraph();
    });
    this.service.newTransac.subscribe(transaction => this.updateChart(transaction));
  }

  // Création du graphique en lignes
  createLineChart (element: any): any {
      return new google.visualization.LineChart(element);
  }
  // Création du tableau
  createDataTable (array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }

  // Initialisation du Graph
  drawGraph() {
    let firstRow = [];
    let table = [];

    console.log(this.user.name);

    table.push('Date');
    table =  _.concat(table, this.user['name']);

    this.options = OPTIONS;
    this.options.title = this.user['name'];

    firstRow = [new Date().toLocaleTimeString(), this.user['balance']];


    this.data = this.createDataTable([
      table,
      firstRow
    ]);
    console.log('Looking for chart' + this.user.name);
    this.chart = this.createLineChart(document.getElementById('chart' + this.user.name));
    this.chart.draw(this.data, this.options);
  }

  // Quand une nouvelle transaction arrive, on update le graph.
  updateChart (transaction: Transaction) {
    let newData = [];
    let newBalances = [];

    newBalances = this.user['balance'];
    this.options.title = this.user['name'];

    newData = [transaction.time.toLocaleTimeString()];
    newData[0] = _.concat(newData, newBalances);

    // now add the rows.
    this.data.addRows(newData);

    if (this.data.getNumberOfRows() > 5) {
      this.data.removeRow(0);
    }

    // redraw the chart.
    this.chart.draw(this.data, this.options);
  }
}
