(function() {
	'use strict';

	//Filter.seed();

	var app = {
		filters: Filter.list(),

		
	};

	// need to override the default ko data-bind to make it
	// CSP compliant which is chrome extension requirement
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
}());