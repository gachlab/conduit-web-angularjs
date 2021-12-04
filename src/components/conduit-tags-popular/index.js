import angular from 'angular'
import template from './template.html'

export default function () {
	angular.module('app').component('conduitTagsPopular', {
		template,
		bindings: {
			tags: '<',
			onSelect: '<',
		},
	});
}

