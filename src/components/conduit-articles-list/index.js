import angular from 'angular'
import template from './template.html'

export default function () {
	angular.module('app').component('conduitArticlesList', {
		template,
		bindings: {
			articles: '<',
		},
	});
}
