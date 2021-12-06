import angular from 'angular'
import template from './template.html'

export default function (dependencies) {
	dependencies.angularModule.component('conduitTagsPopular', {
		template: dependencies.template,
		bindings: {
			tags: '<',
			onSelect: '<',
		},
	});
}

