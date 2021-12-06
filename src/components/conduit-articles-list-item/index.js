export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.articles.list.item', [])
	module.component('conduitArticlesListItem', {
		template: dependencies.template,
		bindings: {
			article: '<',
			onFavoritedArticle: '<',
		},
	});
	return module
}