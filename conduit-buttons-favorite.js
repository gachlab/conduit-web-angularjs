angular.module("app").component("conduitButtonsFavorite", {
  template: `
  <div class="pull-xs-right">
    <button class="btn btn-sm btn-outline-primary" ng-click="$ctrl.onFavorited($ctrl.article)">
      <i class="ion-heart"></i>
      {{$ctrl.article.favoritesCount}}
    </button>
  </div>
  `,
  bindings: {
    article: "<",
    onFavorited: "<",
  },
  controller: function () {},
});
