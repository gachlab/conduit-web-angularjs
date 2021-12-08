export default function (dependencies) {
	return dependencies.angular
		.module('conduit.components.articles.list', [])
		.component('conduitArticlesList', {
			template: dependencies.template,
			bindings: {
				articles: '<',
			},
		});
}
