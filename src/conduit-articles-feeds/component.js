(function (angular) {
	const definition = {
		templateUrl: `conduit-articles-feeds/template.html`,
		bindings: {
			feeds: '<',
			selected: '<',
			onSelect: '<',
		},
	};
	angular.module('app').component('conduitArticlesFeeds', definition);
})(angular);
