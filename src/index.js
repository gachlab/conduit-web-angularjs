import angular from "angular";

import conduitLayoutHeader from "./components/conduit-layout-header";
import conduitLayoutFooter from "./components/conduit-layout-footer";

import conduitPagesHome from "./conduit-pages-home";
import conduitPagesArticlesDetails from "./conduit-pages-articles-details";

const modules = [
  conduitLayoutHeader({
    angular,
  }).name,
  conduitLayoutFooter({
    angular,
  }).name,
  conduitPagesHome({
    angular,
  }).name,
  conduitPagesArticlesDetails({
    angular,
  }).name,
];

const config = ($routeProvider) => {
  $routeProvider.when("/", {
    template: "<conduit-pages-home></conduit-pages-home>",
  });

  $routeProvider.when("/article/:id", {
    template:
      "<conduit-pages-articles-details></conduit-pages-articles-details>",
  });
};

angular
  .module("conduit", ["ngRoute"].concat(modules))
  .config(config)
  .controller("appController", function ($location, $route, $scope) {
    var $ctrl = this;
    $scope.$on(
      "$routeChangeSuccess",
      (event, current, previous) => ($ctrl.currentRoute = location.hash)
    );
  });
