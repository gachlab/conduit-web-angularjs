angular.module("app").component("conduitPagesHome", {
  template: `
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <conduit-articles-feeds
            feeds="$ctrl.feeds"
            selected="$ctrl.selectedFeed"
            on-select="$ctrl.onFeedSelected"
          ></conduit-articles-feeds>

          <conduit-articles-list articles="$ctrl.articles">
            <conduit-articles-list-item
               ng-repeat="article in $ctrl.articles"
               article="article"
            >
              <conduit-articles-preview article="article">
                <conduit-articles-meta article="article">
                  <conduit-buttons-favorite
                    article="article"
                    on-favorited="$ctrl.onFavoritedArticle"
                  ></conduit-buttons-favorite>
                </conduit-articles-meta>
              </conduit-articles-preview>
            </conduit-articles-list-item>
          </conduit-articles-list>
        </div>
        <div class="col-md-3">
          <conduit-tags-popular
            tags="$ctrl.tags"
            on-select="$ctrl.onTagSelected"
          ></conduit-tags-popular>
        </div>
      </div>
    </div>
  </div>
`,
  controller: function (conduiPagesHomeService) {
    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.feeds = [
        { id: "personal", name: "Your feed" },
        { id: "all", name: "Global Feed" },
      ];
      ctrl.selectedFeed = "all";

      conduiPagesHomeService.fetchTags().then(function (tags) {
        ctrl.tags = tags;
      });
      conduiPagesHomeService
        .fetchArticles({ limit: 10, offset: 0, feed: ctrl.feeds[1] })
        .then(function (articles) {
          ctrl.articles = articles;
        });

      ctrl.onTagSelected = function (tag) {
        var tagFeed = {
          id: tag.toLowerCase(),
          name: "#" + tag,
        };
        ctrl.feeds[2] = tagFeed;
        ctrl.selectedFeed = tagFeed.id;
        conduiPagesHomeService
          .fetchArticles({
            limit: 10,
            offset: 0,
            feed: tagFeed,
          })
          .then((articles) => (ctrl.articles = articles));
      };
      ctrl.onFeedSelected = function (selectedFeed) {
        ctrl.selectedFeed = selectedFeed.id;
        conduiPagesHomeService
          .fetchArticles({
            limit: 10,
            offset: 0,
            feed: selectedFeed,
          })
          .then((articles) => (ctrl.articles = articles));
      };
      ctrl.onFavoritedArticle = function (article) {
        console.log(article);
      };
    };

    ctrl.onTagSelected = console.log;
  },
});
