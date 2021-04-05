(function (angular) {
	angular.module('app').component('conduitArticlesMeta', {
		templateUrl: `conduit-articles-meta/template.html`,
		bindings: {
			article: '<',
		},
		transclude: true,
	});
})(angular);
