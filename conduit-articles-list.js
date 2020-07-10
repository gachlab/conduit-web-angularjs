angular.module("app").component("conduitArticlesList", {
  template: `
  <div>
  <ng-transclude></ng-transclude>
  </div>
  `,
  bindings: {
    articles: "<",
  },
  transclude: true,
  controller: function () {},
});
