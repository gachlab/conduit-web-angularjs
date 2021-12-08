export default function (dependencies) {
	return dependencies.angular
		.module('conduit.components.articles.feeds', [])
		.component('conduitArticlesFeeds', {
			template: dependencies.template,
			bindings: {
				feeds: '<',
				selected: '<',
				onSelect: '<',
			},
		});
}
