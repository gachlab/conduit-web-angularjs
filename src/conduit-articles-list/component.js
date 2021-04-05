(function (angular) {
	angular.module('app').component('conduitArticlesList', {
		templateUrl: `conduit-articles-list/template.html`,
		bindings: {
			articles: '<',
		},
	});
})(angular);
