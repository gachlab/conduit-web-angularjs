import angular from 'angular'
import conduitPagesHome from './conduit-pages-home';



const config = function ($routeProvider) {
  $routeProvider.when("/", {
    template: "<conduit-pages-home></conduit-pages-home>",
  });
};

angular.module("app", ["ngRoute"]).config(config);

conduitPagesHome()