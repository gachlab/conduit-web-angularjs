import { init, onTagSelected, onFeedSelected } from './service'
import template from './template.html'
import angular from 'angular'

export default function () {
	angular.module('app').component('conduitPagesHome', {
		template,
		controller,
	});
}


function controller($q) {
	var ctrl = this;
	ctrl.state = {};

	ctrl.$onInit = function () {
		$q(function (resolve, reject) {
			init().then(function (state) {
				resolve(state);
			});
		}).then(function (state) {
			ctrl.setState(state);
		});
	};

	ctrl.onTagSelected = function (tag) {
		$q(function (resolve, reject) {
			onTagSelected({
				tag,
				state: ctrl.getState(),
			}).then(function (state) {
				resolve(state);
			});
		}).then(function (state) {
			ctrl.setState(state);
		});
	};

	ctrl.onFeedSelected = function (feed) {
		$q(function (resolve, reject) {
			onFeedSelected({
				feed,
				state: ctrl.getState(),
			}).then(function (state) {
				resolve(state);
			});
		}).then(function (state) {
			ctrl.setState(state);
		});
	};

	ctrl.getState = function () {
		return JSON.parse(JSON.stringify(ctrl.state));
	};

	ctrl.setState = function (input) {
		Object.keys(input).forEach(function (property) {
			ctrl.state[property] = input[property];
		});
	};
}
