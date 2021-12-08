export default function (dependencies) {
	return dependencies.angular
		.module('conduit.components.layout.header', [])
		.component('conduitLayoutHeader', {
			template: dependencies.template,
		});
};
