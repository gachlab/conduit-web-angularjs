export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.tags.popular', [])
	module.component('conduitTagsPopular', {
		template: dependencies.template,
		bindings: {
			tags: '<',
			onSelect: '<',
		},
	});
	return module
}

