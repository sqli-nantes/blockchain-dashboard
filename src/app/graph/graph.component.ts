import { Component, Input, OnInit } from '@angular/core';
import { OPTIONS } from './graph.options';
import { AppService } from '../app.service';
import { Transaction } from '../class/Transaction';
import * as _ from 'lodash';
declare var google: any;

@Component({
  selector: 'graph',
  styleUrls: ['./_graph.scss'],
  template: `
    <div class="chart" >
        <div [attr.id]="'chart_divEvolution' + user.name"></div>
    </div>
  `
})

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

  createLineChart (element: any): any {
      return new google.visualization.LineChart(element);
  }

  createDataTable (array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }

  drawGraph() {
    let firstRow = [];
    let table = [];

    table.push('Date');
    table =  _.concat(table, this.user['name']);

    this.options = OPTIONS;
    this.options.title = this.user['name'];

    firstRow = [new Date().toLocaleTimeString(), this.user['balance']];


    this.data = this.createDataTable([
      table,
      firstRow
    ]);
    this.chart = this.createLineChart(document.getElementById('chart_divEvolution' + this.user.name));
    this.chart.draw(this.data, this.options);
  }

  // function to update the chart with new data.
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

  randomize(num: number): number {
    return Math.floor(Math.random() * num);
  }

}
