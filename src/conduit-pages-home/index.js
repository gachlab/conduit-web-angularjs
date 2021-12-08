

export default (dependencies) => {

	const module = dependencies.angular.module('conduit.pages.home', [])
	module.component('conduitPagesHome', {
		template: dependencies.template,
		controller,
	});
	return module;

	function controller($q) {
		const ctrl = this;
		const state = {}
		ctrl.state = state;
		ctrl.$onInit = onInit;
		ctrl.onTagSelected = onTagSelected;
		ctrl.onFeedSelected = onFeedSelected;
		ctrl.getState = getState
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

		function onTagSelected(tag) {
			$q((resolve, reject) =>
				dependencies
					.onTagSelected({
						tag,
						state: getState(),
					})
					.then((state) => resolve(state)).catch(reject)
			)
				.then((state) => setState(state))
				.catch(console.error);
		}

		function onFeedSelected(feed) {
			$q((resolve, reject) =>
				dependencies
					.onFeedSelected({
						feed,
						state: getState(),
					})
					.then((state) => resolve(state))
					.catch(console.error)
			)
				.then((state) => setState(state))
				.catch(console.error);
		}

		function getState() {
			return JSON.parse(JSON.stringify(state));
		}

		function setState(input) {
			Object.keys(input).forEach((property) =>
				state[property] = input[property]
			);
		}
	}
}
