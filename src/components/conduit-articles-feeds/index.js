export default function (dependencies) {
	dependencies.angularModule.component('conduitArticlesFeeds', {
		template: dependencies.template,
		bindings: {
			feeds: '<',
			selected: '<',
			onSelect: '<',
		},
	});
}
