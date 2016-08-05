require.config({
	baseUrl: 'src/',
	waitSeconds: 5,
	paths: {
		jquery: 'lib/jquery',
		bootstrap: 'lib/bootstrap',
		knockout: 'lib/knockout',
		kosecurebindings: 'lib/knockout-secure-binding',
		text: 'lib/require-text'
	},
	shim: {
		'bootstrap': { deps: ['jquery'] },
	},
	deps: [
		'knockout',
		'kosecurebindings'
	],
	callback: function (ko, kosecurebindings) {
		ko.secureBindingsProvider = kosecurebindings;
	}
});

require([
		'jquery',
		'knockout',
		'models/filter',
		'components/tile/tile',
		'components/filterbuttons/filterbuttons',
		'bootstrap',
		'lib/domReady!'
	],
	function($, ko, Filter) {
		'use strict';

		//Filter.seed();

		var app = {

			filters: Filter.list(),

			issues: ko.observableArray([1, 2, 3, 4, 5, 6, 7]),

		};

		// need to override the default ko data-bindings to make it
		// CSP compliant which is a chrome extension requirement
		// https://github.com/brianmhunt/knockout-secure-binding
		var options = {
			attribute: "data-bind",
			globals: window,
			bindings: ko.bindingHandlers,
			noVirtualElements: false
		};
		ko.bindingProvider.instance = new ko.secureBindingsProvider(options);

		ko.applyBindings(app);

		console.info('initialized');
	});