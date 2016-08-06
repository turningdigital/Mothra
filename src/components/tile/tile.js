define([
		'knockout',
		'text!components/tile/tile.html'
	],
	function(ko, template) {
		'use strict';

		ko.components.register('tile', {
			viewModel: function(params) {
				var self = this;

				self.openIssue = function() {
					console.log('open issue');
				};

				self.showMenu = function(item, e) {
					let $menu = $(e.target).parent().find('.actions');
					$menu.animate({
						left: '0'
					}, 75, function() {
						$menu.css('z-index', '500');
					});
				};

				self.hideMenu = function(item, e) {
					let $menu = $(e.target).closest('.actions');
					$menu.animate({
						left: '147'
					}, 75, function() {
						$menu.css('z-index', '50');
					});
				};
			},

			template: template
		});
	});