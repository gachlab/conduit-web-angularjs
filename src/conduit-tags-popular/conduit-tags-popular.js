(function (angular) {
	angular.module('app').component('conduitTagsPopular', {
		templateUrl: `conduit-tags-popular/template.html`,
		bindings: {
			tags: '<',
			onSelect: '<',
		},
	});
})(angular);
