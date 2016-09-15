"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var about_component_1 = require('./about/about.component');
var arrow_component_1 = require('./arrow/arrow.component');
var shared_1 = require('./shared');
var app_routing_1 = require('./app.routing');
var app_service_1 = require('./app.service');
var name_service_1 = require('./name/name.service');
var user_pipe_1 = require('./user/user.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                arrow_component_1.ArrowComponent,
                about_component_1.AboutComponent,
                user_component_1.UserComponent,
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