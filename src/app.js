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

		showMenu: function(item, e) {
			$(e.target).next('.actions').animate({ left: '0'}, 75);
			$(e.target).toggleClass('blurry');
		},

		hideMenu: function(item, e) {
			$(e.target).animate({ left: '147'}, 75)
			$(e.target).prev('.main').toggleClass('blurry');
		}
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



	//set

	console.info('initialized');
}());