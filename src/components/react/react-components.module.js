import Table from '../../app/components/Table/Table';

window.angular.module('app.react', ['react']).directive('reactTable', ReactTableDirective);

// Create AngularJS directives from React components with ngReact
// (https://github.com/ngReact/ngReact)

ReactTableDirective.$inject = ['reactDirective'];
function ReactTableDirective(reactDirective) {
	return reactDirective(Table);
}
