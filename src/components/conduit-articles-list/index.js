export default function (dependencies) {
	dependencies.angularModule.component('conduitArticlesList', {
		template: dependencies.template,
		bindings: {
			articles: '<',
		},
	});
}
