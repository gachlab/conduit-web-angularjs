import template from './template.html'
import angular from 'angular'

export default function () {
	angular.module('app').component('conduitArticlesMeta', {
		template,
		bindings: {
			article: '<',
		},
		transclude: true,
	});
};
