export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.articles.feeds', [])
	module.component('conduitArticlesFeeds', {
		template: dependencies.template,
		bindings: {
			feeds: '<',
			selected: '<',
			onSelect: '<',
		},
	});
	return module
}
