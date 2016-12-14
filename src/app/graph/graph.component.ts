/*

    Graph à gauche de l'appli
    @author : Joël CHRABIE

*/
import { Component, Input, OnInit } from '@angular/core';

import { OPTIONS } from './graph.options';
import { AppService } from '../app.service';

import { Transaction } from '../class/Transaction';
import * as _ from 'lodash';


let web3 = require('../utils/web3IPCExtension').web3;


declare var google: any;

@Component({
  selector: 'graph',
  styleUrls: ['./_graph.scss'],
  templateUrl: './graph.html'
})

export class GraphComponent extends OnInit {
  private googleLoaded: any;
  private options;
  private data;
  private chart;
  private lastValue = 0;
  @Input() delta = 0;
  @Input() user;
  @Input() balance = {amount:0,gas:0,count:0};

  constructor (private service: AppService) {
    super();
  }

  getGoogle() {
      return google;
  }

  // Initialisation des packages au lancement du composant et souscription à l'évennement de nouvelle transaction
  ngOnInit() {
    // if (!this.googleLoaded) {
    //   this.googleLoaded = true;
    //   google.charts.load('current', {packages: ['corechart', 'line']});
    // }
    // google.charts.setOnLoadCallback(() => {
    //   this.drawGraph();
    // });

    this.addUser();

    this.service.newTransac.subscribe(transaction => this.updateUser(transaction));
  }

  // Création du graphique en lignes
  createLineChart (element: any): any {
      return new google.visualization.LineChart(element);
  }
  // Création du tableau
  createDataTable (array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }

  addUser() {
    this.service.getIp().then(ip => {
      web3.setProvider(new web3.providers.HttpProvider(ip[0]['ip']));
      this.user['balance'] = Number(web3.eth.getBalance(this.user['address']).plus(2).toString()) / Math.pow(10, 18)
      if(this.user['balance'] < (1/Math.pow(10,17))) this.user['balance'] = 0;

      this.delta = 0;

      this.lastValue = this.user['balance'];
    });
  }

  updateUser (transaction: Transaction) {
    if(transaction.receiver.address == this.user.address && transaction.amount!=0)
      this.balance.amount = transaction.amount; 
    else if(transaction.sender.address == this.user.address && transaction.amount!=0)
      this.balance.amount = -transaction.amount;
    else
      this.balance.amount = 0;
    if(transaction.sender.address == this.user.address)
    {
      this.balance.gas = transaction.gasPrice * transaction.gasUsed;
      this.balance.count += 1;
    }
    else
      this.balance.gas = 0

    this.user['balance'] = Number(web3.eth.getBalance(this.user['address']).plus(2).toString()) / Math.pow(10, 18);
      if(this.user['balance'] < (1/Math.pow(10,17))) this.user['balance'] = 0;

    //let diff : any = 0;

    //diff = this.user['balance'] - this.lastValue;

    //this.delta = (diff > 100) ? 1 : ( (diff < -100) ? -1 : 0 );

    this.delta = (this.user['balance'] > this.lastValue) ? 1 : ( (this.user['balance'] < this.lastValue) ? -1 : 0 );

	console.log(this.user['balance'] + " <> " + this.lastValue);

    this.lastValue = this.user['balance'];
  }

  // // Initialisation du Graph
  // drawGraph() {
  //   let firstRow = [];
  //   let table = [];

  //   console.log(this.user);

  //   table.push('Date');
  //   table =  _.concat(table, this.user['name']);

  //   this.options = OPTIONS;
  //   this.options.title = this.user['name'];

  //   firstRow = [new Date().toLocaleTimeString(), this.user['balance']];


  //   this.data = this.createDataTable([
  //     table,
  //     firstRow
  //   ]);
  //   console.log('Looking for chart' + this.user.name);
  //   this.chart = this.createLineChart(document.getElementById('chart' + this.user.name));
  //   this.chart.draw(this.data, this.options);
  // }

  // // Quand une nouvelle transaction arrive, on update le graph.
  // updateChart (transaction: Transaction) {
  //   let newData = [];
  //   let newBalances = [];

  //   newBalances = this.user['balance'];
  //   this.options.title = this.user['name'];

  //   newData = [transaction.time.toLocaleTimeString()];
  //   newData[0] = _.concat(newData, newBalances);

  //   // now add the rows.
  //   this.data.addRows(newData);

  //   if (this.data.getNumberOfRows() > 5) {
  //     this.data.removeRow(0);
  //   }

  //   // redraw the chart.
  //   this.chart.draw(this.data, this.options);
  // }
}
