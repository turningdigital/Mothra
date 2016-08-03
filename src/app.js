var templates = {};

(function() {
	'use strict';

	//Filter.seed();

	var app = {
		filters: Filter.list(),

		templatesLoaded: ko.observable(false)
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

	$.get('src/components/tile/tile.html')
		.done(function(tileTemplate) {
			templates['tile'] = tileTemplate;
			app.templatesLoaded(true);
		});

	console.info('initialized');
}());