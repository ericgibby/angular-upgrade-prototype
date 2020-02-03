// eslint-disable-next-line import/no-webpack-loader-syntax
// import 'expose-loader?angular';

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

/* eslint-disable import/no-webpack-loader-syntax */
require('ngtemplate-loader?relativeTo=src/&module=app.templates!html-loader!./components/grid/grid.html');
require('ngtemplate-loader?relativeTo=src/&module=app.templates!html-loader!./components/header/header.html');
require('ngtemplate-loader?relativeTo=src/&module=app.templates!html-loader!./views/home/home.html');
require('ngtemplate-loader?relativeTo=src/&module=app.templates!html-loader!./views/table/table.html');
/* eslint-enable */

// Bootstrap the app
window.angular.bootstrap(document, ['app']);
