'use strict';

var Filter = (function() {
	var FilterModel = function({
		name = 'new',
		query = 'new',
		enabled = true,
		icon = 'fa-circle-o'
	} = {}) {
		let self = this;

		self.name = ko.observable(name);
		self.query = ko.observable(query);
		self.enabled = ko.observable(enabled);
		self.icon = ko.observable(icon);
	};

	return {
		create: function(f) {
			return new FilterModel(f);
		},

		list: function() {
			let _filters = JSON.parse(localStorage.getItem('filters'));

			if (!_filters) {
				return
			};

			let filters = ko.observableArray();
			for (let f of _filters) {
				filters.push(this.create(f));
			}

			return filters;
		},

		save: function(f) {
			if(ko.isObservable(f.name)) {
				f = ko.toJS(f);
			}

			let _filters = JSON.parse(localStorage.getItem('filters'));
			_filters.push(f);

			localStorage.setItem('filters', JSON.stringify(_filters));
		},

		delete: function(f) {
			
		}
	};
})();

// "[{\"name\":\"My New Filter\",\"query\":\"new\",\"enabled\":true,\"icon\":\"fa-circle-0\"}]"