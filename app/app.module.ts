import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule,XHRBackend }    from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { ArrowComponent }  from './partial/arrow.component';

import { AppService } from './app.service'
import { NameService } from './name.service'

@NgModule({
  imports:      [ 
  	BrowserModule,
  	HttpModule
  ],
  declarations: [ 
  	AppComponent,
  	ArrowComponent,
  ],
  providers:[
	  AppService,
    NameService,
	  { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
	  { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data],
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
