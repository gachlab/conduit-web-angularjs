angular.module("app").component("conduitArticlesMeta", {
  template: `
    <div class="article-meta">
      <a>
        <img src="{{$ctrl.article.author.image}}" />
      </a>
      <div class="info">
        <a class="author" href="{{'#/profile/'+$ctrl.article.author.username}}"
          >{{$ctrl.article.author.username}}</a
        >
        <span class="date">{{$ctrl.article.createdAt | date}}</span>
      </div>
      <ng-transclude></ng-transclude>
    </div>
  `,
  bindings: {
    article: "<",
  },
  transclude: true,
  controller: function () {},
});
