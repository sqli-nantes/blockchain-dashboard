/*

    Module permettant d'importer l'ensemble des composants, modules, pipes ... pour le lancement de l'appli
    @author : Joël CHRABIE

*/

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TabGraphComponent }  from './tabGraph/tabGraph.component';
import { TransListComponent }  from './transactionList/transList.component';
import { GraphComponent }  from './graph/graph.component';

import { AppService } from './app.service';
import { NameService } from './name/name.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    MainComponent,
    TabGraphComponent,
    GraphComponent,
    TransListComponent
  ],
  providers: [
    AppService,
    NameService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
