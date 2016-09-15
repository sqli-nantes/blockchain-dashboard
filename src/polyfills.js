"use strict";
require('core-js/client/shim');
require('reflect-metadata');
require('zone.js/dist/zone');
require('ts-helpers');
if (process.env.ENV === 'build') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map