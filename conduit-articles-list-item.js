angular.module("app").component("conduitArticlesListItem", {
  template: `
  <div>
    <ng-transclude></ng-transclude>
  </div>
  `,
  bindings: { article: "<" },
  transclude: true,
  controller: function () {},
});
