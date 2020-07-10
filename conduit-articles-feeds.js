angular.module("app").component("conduitArticlesFeeds", {
  template: `
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li ng-repeat="feed in $ctrl.feeds" class="nav-item">
          <a
            class="nav-link"
            ng-class="{'active': feed.id===$ctrl.selected}"
            ng-click="$ctrl.onSelect(feed)"
            >{{feed.name}}</a
          >
        </li>
      </ul>
    </div>
  `,
  bindings:{
    feeds:'<',
    selected:'<',
    onSelect:'<'
  },
  controller: function () {},
});
