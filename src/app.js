(function() {

	var filters = [
		{
			name: '',
			icon: '',
			rule: '',
		}
	];

	var app = {
		testtext: ko.observable('yahoo'),
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

	self.variable = ko.observableArray();

	console.info('initialized');
}());