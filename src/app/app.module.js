/*

    Module permettant d'importer l'ensemble des composant, modules, pipes ... pour le lancement de l'appli
    @author : Joël CHRABIE

*/
"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var user_component_1 = require('./user/user.component');
var arrow_component_1 = require('./arrow/arrow.component');
var tabGraph_component_1 = require('./graph/tabGraph.component');
var userGraph_component_1 = require('./user-graph/userGraph.component');
var canvas_component_1 = require('./user-graph/canvas.component');
var transList_component_1 = require('./trans-list/transList.component');
var shared_1 = require('./shared');
var app_service_1 = require('./app.service');
var name_service_1 = require('./name/name.service');
var user_pipe_1 = require('./user/user.pipe');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var tabs_1 = require('@angular2-material/tabs');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                button_1.MdButtonModule,
                card_1.MdCardModule,
                tabs_1.MdTabsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                arrow_component_1.ArrowComponent,
                user_component_1.UserComponent,
                tabGraph_component_1.TabGraphComponent,
                userGraph_component_1.UserGraphComponent,
                canvas_component_1.CanvasComponent,
                transList_component_1.TransListComponent,
                user_pipe_1.NumeralFormatPipe
            ],
            providers: [
                app_service_1.AppService,
                name_service_1.NameService,
                shared_1.ApiService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map