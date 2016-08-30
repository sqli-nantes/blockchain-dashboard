/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2':                   'node_modules/angular2',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'gsap':                       'node_modules/gsap/src/minified/',
    "lodash":                     'node_modules/lodash',
    "web3":                       'node_modules/web3',
    'bignumber.js':               'node_modules/bignumber.js/',
    "utf8":                       'node_modules/utf8',
    "crypto-js":                  'node_modules/crypto-js',
    "xmlhttprequest":             'node_modules/xmlhttprequest/lib',
    "url":                        'node_modules/url',
    'child_process':              'node_modules/child_process',
    "fs":                         'node_modules/fs',
    "http":                       'node_modules/http',
    "https":                      'node_modules/https',
    "punycode":                   'node_modules/punycode',
    "querystring":                'node_modules/querystring',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { defaultExtension: 'js',    main: 'main.js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js',    main: 'index.js' },
    'angular2':                   { defaultExtension: 'js',    main: 'index.js' },
    'gsap':                       { defaultExtension: 'js',    main: 'TweenMax.min.js' },
    'lodash':                     { defaultExtension: 'js',    main: 'lodash.js' },
    'web3':                       { 
                                    defaultExtension: 'js',    
                                    main: 'index.js',    
                                    meta: { 
                                      '*.json': { 
                                        loader: 'node_modules/systemjs-plugin-json/json.js' 
                                      }
                                    }
                                  },
    'bignumber.js':               { defaultExtension: 'js',    main: 'bignumber.js',    },
    'utf8':                       { defaultExtension: 'js',    main: 'utf8',    },
    'xmlhttprequest':             { defaultExtension: 'js',    main: 'XMLHttpRequest.js',    },
    'crypto-js':                  { defaultExtension: 'js',    main: 'crypto-js.js',    },
    'url':                        { defaultExtension: 'js',    main: 'url.js',    },
    'child_process':              { defaultExtension: 'json',  main: 'package.json',    },
    'fs':                         { defaultExtension: 'json',  main: 'package.json',    },
    'http':                       { defaultExtension: 'json',  main: 'package.json',    },
    'https':                      { defaultExtension: 'json',  main: 'package.json',    },
    'punycode':                   { defaultExtension: 'js',    main: 'punycode.js',    },
    'querystring':                { defaultExtension: 'js',    main: 'index.js',    },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);