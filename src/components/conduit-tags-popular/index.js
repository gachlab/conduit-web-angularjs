export default function (dependencies) {
	return dependencies.angular
		.module('conduit.components.tags.popular', [])
		.component('conduitTagsPopular', {
			template: dependencies.template,
			bindings: {
				tags: '<',
				onSelect: '<',
			},
		});
}
