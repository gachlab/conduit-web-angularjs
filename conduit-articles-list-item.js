angular.module("app").component("conduitArticlesListItem", {
  template: `
       <conduit-articles-preview article="$ctrl.article">
        <conduit-articles-meta article="$ctrl.article">
          <conduit-buttons-favorite
            article="$ctrl.article"
            on-favorited="$ctrl.onFavoritedArticle"
          ></conduit-buttons-favorite>
        </conduit-articles-meta>
      </conduit-articles-preview>
   `,
  bindings: {
    article: "<",
  },
  controller: function () {
    this.onFavoritedArticle = console.log;
  },
});
