angular.module("app").component("conduitArticlesListItem", {
  templateUrl: `conduit-articles-list-item/template.html`,
  bindings: {
    article: "<",
  },
  controller: function () {
    this.onFavoritedArticle = console.log;
  },
});
