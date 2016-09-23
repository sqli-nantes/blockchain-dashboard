/*

    Module permettant d'importer l'ensemble des composants, modules, pipes ... pour le lancement de l'appli
    @author : Joël CHRABIE

*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ArrowComponent }  from './arrow/arrow.component';
import { TabGraphComponent }  from './tabGraph/tabGraph.component';
import { TransListComponent }  from './transactionList/transList.component';
import { GraphComponent }  from './graph/graph.component';

import { ApiService } from './shared';
import { AppService } from './app.service';
import { NameService } from './name/name.service';

import { NumeralFormatPipe } from './user/user.pipe';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdTabsModule } from '@angular2-material/tabs';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule
  ],
  declarations: [
    AppComponent,
    ArrowComponent,
    UserComponent,
    TabGraphComponent,
    GraphComponent,
    TransListComponent,
    NumeralFormatPipe
  ],
  providers: [
    AppService,
    NameService,
    ApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
