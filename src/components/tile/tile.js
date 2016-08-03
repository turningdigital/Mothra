'use strict';

ko.components.register('tile', {
	viewModel: function (params) {
		var self = this;

		self.filter = params;

		console.log('hello');
	},

	template: function() {
		return 'wow';
	}
});




// showMenu: function(item, e) {
// 			$(e.target).next('.actions').animate({ left: '0'}, 75);
// 			//$(e.target).toggleClass('blurry');
// 		},

// 		hideMenu: function(item, e) {
// 			$(e.target).animate({ left: '147'}, 75)
// 			//$(e.target).prev('.main').toggleClass('blurry');
// 		}