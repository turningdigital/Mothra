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
					//$(e.target).toggleClass('blurry');
				};

				self.hideMenu = function(item, e) {
					$(e.target).animate({
						left: '147'
					}, 75)
					//$(e.target).prev('.main').toggleClass('blurry');
				};
			},

			template: template
		});
	});