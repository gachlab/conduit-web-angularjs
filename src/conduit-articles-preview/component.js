(function (angular) {
	angular.module('app').component('conduitArticlesPreview', {
		templateUrl: `conduit-articles-preview/template.html`,
		bindings: { article: '<' },
		transclude: true,
	});
})(angular);
