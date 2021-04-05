(function (angular) {
	angular.module('app').component('conduitArticlesListItem', {
		templateUrl: `conduit-articles-list-item/template.html`,
		bindings: {
			article: '<',
			onFavoritedArticle: '<',
		},
	});
})(angular);
