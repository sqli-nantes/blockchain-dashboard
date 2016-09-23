import { Component, Input, OnInit } from '@angular/core';
import { OPTIONS } from './graph.options';
import { AppService } from '../app.service';
import * as _ from 'lodash';
declare var google: any;

@Component({
  selector: 'graph',
  styleUrls: ['./_graph.scss'],
  template: `
    <div (click)="emitEvent1()" class="chart" >
        <div [attr.id]="'chart_divEvolution' + user.name"></div>
    </div>
  `
})

export class GraphComponent extends OnInit {
  private googleLoaded: any;
  private options;
  private data;
  private chart;
  private table: any[];
  @Input() user;
  @Input() transactions;

  constructor (private service: AppService) {
    super();
    this.service.on('event1', (event) => {
      console.log(event);
    });
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
      setInterval(() => this.updateChart(), 10000);
    });
  }

  emitEvent1() {
    this.service.broadcast({
      name: 'event1',
      message: 'content of event1'
    });
  }

  createLineChart (element: any): any {
      return new google.visualization.LineChart(element);
  }

  createDataTable (array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }

  drawGraph() {
    let firstRow = [];

    this.table.push('Date');
    this.table =  _.concat(this.table, this.user['name']);

    this.options = OPTIONS;
    this.options.title = this.user['name'];

    switch (this.user['name']) {
      case 'Jim':
        this.options.colors = ['rgb(255, 227, 172)'];
        break;
      case 'Seraphin':
        this.options.colors = ['rgb(205, 177, 122)'];
        break;
      default:
        this.options.colors = ['rgb(155, 127, 72)'];
        break;
    }

    this.service.on('event1', (event) => {
      console.log('event1 received');
    });

    firstRow = [new Date().toLocaleTimeString(), this.user['balance']];


    this.data = this.createDataTable([
      this.table,
      firstRow
    ]);
    this.chart = this.createLineChart(document.getElementById('chart_divEvolution' + this.user.name));
    this.chart.draw(this.data, this.options);
  }

  // function to update the chart with new data.
  updateChart() {
    let newData = [];
    let newBalances = [];

    newBalances = this.user['balance'];
    newData = [new Date().toLocaleTimeString()];
    newData[0] = _.concat(newData, newBalances);

    // now add the rows.
    this.data.addRows(newData);

    if (this.data.getNumberOfRows() > 8) {
      this.data.removeRow(0);
    }
    console.log(this.user);

    // redraw the chart.
    this.chart.draw(this.data, this.options);
  }

  randomize(num: number): number {
    return Math.floor(Math.random()*num);
  }

  randomizeDate (rangeOfDays, startHour, hourRange): string {
    let today = new Date(Date.now());
    return new Date(today.getFullYear() + 1900, today.getMonth(), today.getDate() + Math.random() * rangeOfDays,
      Math.random() * hourRange + startHour, Math.random() * 60).toLocaleTimeString();
  }

}
