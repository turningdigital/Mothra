define([
		'knockout'
	],
	function(ko) {
		var filterStorageKey = 'filters';

		var FilterModel = function({
			name = '',
			query = '',
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
				if (ko.isObservable(f.name)) {
					f = ko.toJS(f);
				}

				let _filters = JSON.parse(localStorage.getItem(filterStorageKey));
				if (_filters) {
					_filters.push(f);
				} else {
					_filters = [f];
				}

				localStorage.setItem(filterStorageKey, JSON.stringify(_filters));
			},

			delete: function(f) {

			},

			clear: function() {
				localStorage.removeItem(filterStorageKey);
			},

			seed: function() {
				this.clear();

				var f1 = this.create({
					name: 'Filter One',
					query: 'Query 1',
					icon: 'fa-bug'
				});
				this.save(f1);

				var f2 = this.create({
					name: 'Filter Two',
					query: 'Query 2',
					icon: 'fa-globe'
				});
				this.save(f2);

				var f3 = this.create({
					name: 'Filter Three',
					query: 'Query 3',
					icon: 'fa-life-buoy'
				});
				this.save(f3);
			}
		};
	});