export default function (dependencies) {
	dependencies.angularModule.component('conduitArticlesPreview', {
		template: dependencies.template,
		bindings: { article: '<' },
		transclude: true,
	});
};
