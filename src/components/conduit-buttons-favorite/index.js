export default function (dependencies) {
	dependencies.angularModule.component('conduitButtonsFavorite', {
		template: dependencies.template,
		bindings: {
			article: '<',
			onFavorited: '<',
		},
	});
};
