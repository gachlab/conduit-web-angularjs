export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.articles.list', [])
	module.component('conduitArticlesList', {
		template: dependencies.template,
		bindings: {
			articles: '<',
		},
	});
	return module
}
