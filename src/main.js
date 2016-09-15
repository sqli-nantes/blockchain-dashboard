"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}
exports.main = main;
if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}
//# sourceMappingURL=main.js.map