(function (angular) {
	angular.module('app').component('conduitArticlesFeeds', {
		templateUrl: `conduit-articles-feeds/template.html`,
		bindings: {
			feeds: '<',
			selected: '<',
			onSelect: '<',
		},
	});
})(angular);
