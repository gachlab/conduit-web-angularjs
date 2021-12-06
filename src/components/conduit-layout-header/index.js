export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.layout.header', [])
	module.component('conduitLayoutHeader', {
		template: dependencies.template,
	});
	return module
};
