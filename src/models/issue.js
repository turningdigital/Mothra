define([
		'knockout'
	],
	function(ko) {

		var WorkitemrModel = function({
			name = '',
		} = {}) {
			let self = this;

			self.name = ko.observable(name);
		};

		return {
			create: function(f) {
				return new WorkitemrModel(w);
			},

			list: function() {

			},

			save: function(f) {

			},

			delete: function(f) {

			},

			clear: function() {

			},

			seed: function() {

			}
		};
	});