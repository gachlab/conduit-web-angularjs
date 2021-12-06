export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.buttons.favorite', [])
	module.component('conduitButtonsFavorite', {
		template: dependencies.template,
		bindings: {
			article: '<',
			onFavorited: '<',
		},
	});
	return module
};
