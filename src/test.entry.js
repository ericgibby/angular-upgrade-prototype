import './vendor';
import 'angular-mocks';

// Load modules before other JS
const modules = require.context('./', true, /module\.js$/);
modules.keys().forEach(modules);

// Load application JS
const js = require.context('./', true, /^(?!.*(index|\.(test|spec|module))\.js$).*\.js$/);
js.keys().forEach(js);

// Stub in templates module (don't need to actually load HTML though)
window.angular.module('app.templates', []);
