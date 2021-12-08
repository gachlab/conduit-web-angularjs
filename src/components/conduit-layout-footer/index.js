export default function (dependencies) {
	return dependencies.angular
		.module('conduit.components.layout.footer', [])
		.component('conduitLayoutFooter', {
			template: dependencies.template,
		});
}
