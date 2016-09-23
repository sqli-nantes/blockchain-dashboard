import { Component, OnInit, Input } from '@angular/core';
import 'gsap'
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import * as _ from 'lodash';
import {Transaction} from './Transaction'
import {User} from './User';
import './rxjs-extensions';
import { Observable }     from 'rxjs/Observable';

import { ReflectiveInjector } from '@angular/core';
import { AppService} from './app.service'

import { ENODE } from './enode.const'

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
    web3.setProvider(new web3.providers.HttpProvider('http://10.33.44.182:8547'));
    var addPeers = web3.admin.addPeer(ENODE);
    console.log(addPeers);

    var filter = web3.eth.filter("latest");
    filter.watch((error, result)=>{
      if (!error){
        console.log(result);
        var transac = web3.eth.getTransaction(result);
        console.log(transac);
      }
    });
  }

	getUsers() : Promise<any> {
		return this.appService.getUsers().then(response=>{
      this.users=response
    });
	}

	addStat(): void { 
    this.addTransaction();
    
    setTimeout(()=>{
      TweenMax.to(".ui:first-child", 0.6, {height:0, reversed:true, ease:Sine.easeOut});
      TweenMax.to(".ui:first-child .transac_box", 0.6, {opacity:1, delay:0.6});
      TweenMax.to(".ui:first-child .transaction", 0.6, {opacity:1, delay:0.6});
    },1);    
	}

  addTransaction(){
    this.transactions.unshift(this.randomTransac());

    if(this.transactions.length>=5) {
      this.transactions.pop();
    }
  }

  randomTransac(){    
    var uS={},uR={};

    do {
      uS=this.users[this.random(5)]
      uR=this.users[this.random(5)]
    } while (uS===uR);

    return {
      sender:uS,
      receiver:uR,
      amount:this.random(99)
    }
  }

  random(x:number){
    return Math.floor(Math.random() * x)
  }
}

