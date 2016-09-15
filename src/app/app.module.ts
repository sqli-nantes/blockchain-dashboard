/*

    Module permettant d'importer l'ensemble des composant, modules, pipes ... pour le lancement de l'appli
    @author : Joël CHRABIE

*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { AboutComponent } from './about/about.component';
import { ArrowComponent }  from './arrow/arrow.component';

import { ApiService } from './shared';
import { routing } from './app.routing';
import { AppService } from './app.service';
import { NameService } from './name/name.service';

import { NumeralFormatPipe } from './user/user.pipe';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ArrowComponent,
    AboutComponent,
    UserComponent,
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
