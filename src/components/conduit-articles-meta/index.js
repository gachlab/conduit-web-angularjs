export default function (dependencies) {
	dependencies.angularModule.component('conduitArticlesMeta', {
		template: dependencies.template,
		bindings: {
			article: '<',
		},
		transclude: true,
	});
};
