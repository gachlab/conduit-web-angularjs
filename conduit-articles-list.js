angular.module("app").component("conduitArticlesList", {
  template:  `
    <conduit-articles-list-item
      ng-repeat="article in $ctrl.articles"
      article="article"
    ></conduit-articles-list-item>
  `,
  bindings: {
    articles: "<",
  },
  controller: function () {},
});
