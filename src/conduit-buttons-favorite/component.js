angular.module("app").component("conduitButtonsFavorite", {
  templateUrl: `conduit-buttons-favorite/template.html`,
  bindings: {
    article: "<",
    onFavorited: "<",
  },
  controller: function () {},
});
