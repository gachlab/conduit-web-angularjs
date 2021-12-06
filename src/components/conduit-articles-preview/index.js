export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.articles.preview', [])
	module.component('conduitArticlesPreview', {
		template: dependencies.template,
		bindings: { article: '<' },
		transclude: true,
	});
	return module
};
