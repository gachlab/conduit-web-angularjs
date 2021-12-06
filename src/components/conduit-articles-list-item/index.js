export default function (dependencies) {
	dependencies.angularModule.component('conduitArticlesListItem', {
		template: dependencies.template,
		bindings: {
			article: '<',
			onFavoritedArticle: '<',
		},
	});
}