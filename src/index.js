// Load vendor files
import './vendor';

// Load modules before other JS
const modules = require.context('./', true, /module\.js$/);
modules.keys().forEach(modules);

// Load all other JS
const js = require.context('./', true, /^(?!.*\.(test|spec|mock|module)\.js$).*\.js$/);
js.keys().forEach(js);

// Load HTML templates into AngularJS's template cache
angular.module('app.templates', []);
const templates = require.context('./', true, /^(?!.*index\.html$).*\.html$/);
templates
	.keys()
	.filter(key => !/^\.\/app/.test(key)) // Exclude (modern) Angular templates
	.forEach(templates);

// Bootstrap the app
angular.bootstrap(document, ['app']);
