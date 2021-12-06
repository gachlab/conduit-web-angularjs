export default function (dependencies) {
	const module = dependencies.angular.module('conduit.components.layout.footer', [])
	module.component('conduitLayoutFooter', {
		template: dependencies.template,
	});
	return module
}
