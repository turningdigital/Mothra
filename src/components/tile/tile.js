define([
		'knockout',
		'text!components/tile/tile.html'
	],
	function(ko, template) {
		'use strict';

		ko.components.register('tile', {
			viewModel: function(params) {
				var self = this;

				self.showMenu = function(item, e) {
					$(e.target).next('.actions').animate({
						left: '0'
					}, 75);
				};

				self.hideMenu = function(item, e) {
					$(e.target).closest('div .menu').animate({
						left: '147'
					}, 75);
				};
			},

			template: template
		});
	});