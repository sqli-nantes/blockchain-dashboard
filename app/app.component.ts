import { Component, OnInit, Input } from '@angular/core';
import 'gsap'
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import * as _ from 'lodash';
import {Transaction} from './transaction'
import {User} from './User';
import './rxjs-extensions';
import { Observable }     from 'rxjs/Observable';

import { ReflectiveInjector } from '@angular/core';
import { AppService} from './app.service'

var web3 = require('./web3IPCExtension').web3;
declare let TweenMax: any; 

@Component({
  selector: 'stats',
  templateUrl: 'app/app.component.html',
  providers:[BrowserDomAdapter,AppService]
})

export class AppComponent implements OnInit{
	users:User[];
	senderName:string;
	receiverName:string;
	transactions = [];
	constructor(
		private appService:AppService,
		private dom:BrowserDomAdapter
	) { }


	ngOnInit(){  
    this.blockchainConnect();
		this.getUsers();
    console.log(web3);
    setInterval(()=>this.addStat(),5000);
	}

  blockchainConnect(){
    
  }

	getUsers() : Promise<any> {
		return this.appService.getUsers().then(response=>{
      this.users=response
    });
	}

	addStat(): void { 

    TweenMax.to(".ui:first-child", 0.6, {opacity:0.9, scale:0.8});
  
    this.addTransaction();    

  	setTimeout(()=>{
      TweenMax.to(".ui:first-child", 0.6, {opacity:0, height:0, reversed:true});
    }, 1);
    
	}

  addTransaction(){
    this.transactions.unshift(this.randomTransac());
  }

  randomTransac(){    
    var uS={},uR={};
    do {
      uS=this.users[this.random(5)]
      uR=this.users[this.random(5)]
    } while (uS===uR);
    return {sender:uS,receiver:uR,amount:this.random(150)}
  }

  random(x:number){
    return Math.floor(Math.random() * x)
  }


}

