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

import { web3 } from './web3IPCExtension';

var injector = ReflectiveInjector.resolveAndCreate([
  Transaction,
  User
]);

var transaction = injector.get(Transaction);
var user = injector.get(User);

declare var module: { id: string };

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
		this.getUsers();
    console.log(web3);
	}

	getUsers() : Promise<any> {
		return this.appService.getUsers().then(response=>{
      this.users=response
    });
	}

	addStat(): void { 

    TweenMax.to(".ui:first-child", 0.6, {opacity:0.9, scale:0.6});
  
    this.addTransaction();    

  	setTimeout(()=>{
      TweenMax.to(".ui:first-child", 0.6, {opacity:0, height:0, reversed:true});
    }, 1);
    
	}

  randomTransac(){    
    var uS={},uR={};
    do {
      uS=this.users[Math.floor(Math.random() * 5)]
      uR=this.users[Math.floor(Math.random() * 5)]
    } while (uS===uR);
    return {sender:uS,receiver:uR,amount:Math.floor(Math.random() * 150)}
  }

  addTransaction(){
    this.transactions.unshift(this.randomTransac());
  }

}

