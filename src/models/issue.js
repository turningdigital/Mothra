define([
		'knockout'
	],
	function(ko) {

		var WorkitemrModel = function({
			key = '',
			summary = '',
			type = '',
			status = '',
		} = {}) {
			let self = this;

			self.key = ko.observable(key)
			self.summary = ko.observable(summary);
			self.type = ko.observable(type);
			self.status = ko.observable(status);
		};

		return {
			create: function(f) {
				return new WorkitemrModel(w);
			},

			list: function() {
				let mockTiles = [
					{
						key: 'DWINS-29',
						summary: '',
						type: '',
						status: '',
					},
					{
						key: 'DWINS-28',
						summary: '',
						type: '',
						status: '',
					},
					{
						key: 'DWINS-27',
						summary: '',
						type: '',
						status: '',
					},
					{
						key: 'DAT-8',
						summary: '',
						type: '',
						status: '',
					},
				];

				return mockTiles;
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