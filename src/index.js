// Load vendor files
import './vendor';

// Load styles
import './index.scss';

// Load modules before other JS
const modules = require.context('./', true, /module\.js$/);
modules.keys().forEach(modules);

// Load all other JS
const js = require.context('./', true, /^(?!.*\.(test|spec|mock|module)\.js$).*\.js$/);
js.keys().forEach(js);

// Load HTML templates into Angular's template cache
angular.module('app.templates', []);
const templates = require.context('./', true, /^(?!.*index\.html$).*\.html$/);
templates.keys().forEach(templates);

// Bootstrap the app
angular.bootstrap(document, ['app']);
