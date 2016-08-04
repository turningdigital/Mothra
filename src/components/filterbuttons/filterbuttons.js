define([
		'knockout',
		'text!components/filterbuttons/filterbuttons.html'
	],
	function(ko, template) {
		'use strict';

		ko.components.register('filterbuttons', {
			viewModel: function(params) {
				var self = this;

				self.filters = params;
			},

			template: template
		});
	});