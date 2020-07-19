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
              feeds="$ctrl.state.feeds"
              selected="$ctrl.state.selectedFeed"
              on-select="$ctrl.onFeedSelected"
            ></conduit-articles-feeds>
            <conduit-articles-list
              articles="$ctrl.state.articles"
            ></conduit-articles-list>
          </div>
          <div class="col-md-3">
            <conduit-tags-popular
              tags="$ctrl.state.tags"
              on-select="$ctrl.onTagSelected"
            ></conduit-tags-popular>
          </div>
        </div>
      </div>
    </div>
  `,
  controller: function ($q) {
    var ctrl = this;
    ctrl.state = {};

    ctrl.$onInit = function () {
      $q(function (resolve, reject) {
        ConduitPagesHomeService.init().then(function (state) {
          resolve(state);
        });
      }).then(function (state) {
        ctrl.setState(state);
      });
    };

    ctrl.onTagSelected = function (tag) {
      $q(function (resolve, reject) {
        ConduitPagesHomeService.onTagSelected({
          tag,
          state: ctrl.getState(),
        }).then(function (state) {
          resolve(state);
        });
      }).then(function (state) {
        ctrl.setState(state);
      });
    };

    ctrl.onFeedSelected = function (feed) {
      $q(function (resolve, reject) {
        ConduitPagesHomeService.onFeedSelected({
          feed,
          state: ctrl.getState(),
        }).then(function (state) {
          resolve(state);
        });
      }).then(function (state) {
        ctrl.setState(state);
      });
    };

    ctrl.getState = function () {
      return JSON.parse(JSON.stringify(ctrl.state));
    };

    ctrl.setState = function (input) {
      Object.keys(input).forEach(function (property) {
        ctrl.state[property] = input[property];
      });
    };
  },
});
