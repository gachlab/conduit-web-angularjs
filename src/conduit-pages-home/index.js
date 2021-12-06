

export default function (dependencies) {
	
	const module = dependencies.angular.module('conduit.pages.home', [])
	module.component('conduitPagesHome', {
		template: dependencies.template,
		controller,
	});

	return module;

	function controller($q) {
		var ctrl = this;
		ctrl.state = {};

		ctrl.$onInit = function () {
			$q(function (resolve, reject) {
				dependencies.init().then(function (state) {
					resolve(state);
				});
			}).then(function (state) {
				ctrl.setState(state);
			});
		};

		ctrl.onTagSelected = function (tag) {
			$q(function (resolve, reject) {
				dependencies.onTagSelected({
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
				dependencies.onFeedSelected({
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
}
