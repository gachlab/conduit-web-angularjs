export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.articles.meta', [])
	module.component('conduitArticlesMeta', {
		template: dependencies.template,
		bindings: {
			article: '<',
		},
		transclude: true,
	});
	return module
};
