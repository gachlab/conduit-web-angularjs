export default service

function service(dependencies) {
	return dependencies
		.angular
		.module('conduit.pages.home', [])
		.component('conduitPagesHome', {
			template: dependencies.template,
			controller: controller(dependencies),
		});
}

function controller(dependencies) {
	return function ($q) {
		const ctrl = this;
		const state = {}
		ctrl.state = state;
		ctrl.$onInit = onInit;
		ctrl.onFeedSelected = onFeedSelected
		ctrl.onTagSelected = onTagSelected
		ctrl.setState = setState;

		function onInit() {
			$q((resolve, reject) =>
				dependencies
					.init()
					.then((state) => resolve(state))
					.catch(reject)
			)
				.then((state) => setState(state))
				.catch(console.error);
		}

		function onFeedSelected(feed) {
			return dependencies.onFeedSelected({ state, feed }).then(setState)
		}


		function onTagSelected(tag) {
			return dependencies.onTagSelected({ state, tag }).then(setState)
		}

		function setState(input) {
			Object.keys(input).forEach((property) =>
				state[property] = input[property]
			);
		}
	}
}