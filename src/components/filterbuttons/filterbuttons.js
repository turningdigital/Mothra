define([
		'knockout',
		'text!components/filterbuttons/filterbuttons.html'
	],
	function(ko, template) {
		'use strict';

		ko.components.register('filterbuttons', {
			viewModel: function(params) {
				var self = this;

				self.filters = params.filters();

				self.refresh = function() {
					console.log('refresh');
				};

				self.options = function() {
					console.log('options');
				};

				setTimeout(function() {
					$('[data-toggle="tooltip"]').tooltip();
				}, 10);
			},

			template: template
		});
	});