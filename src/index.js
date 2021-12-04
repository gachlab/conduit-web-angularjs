import angular from 'angular'
import conduitPagesHome from './conduit-pages-home';
import conduitTagsPopular from './components/conduit-tags-popular'
import conduitArticlesFeeds from './components/conduit-articles-feeds';
import conduitArticlesList from './components/conduit-articles-list';
import conduitArticlesListItem from './components/conduit-articles-list-item';
import conduitArticlesPreview from './components/conduit-articles-preview';
import conduitArticlesMeta from './components/conduit-articles-meta';
import conduitButtonsFavorite from './components/conduit-buttons-favorite';
import conduitLayoutFooter from './conduit-layout-footer';
import conduitLayoutHeader from './conduit-layout-header';


const config = function ($routeProvider) {
  $routeProvider.when("/", {
    template: "<conduit-pages-home></conduit-pages-home>",
  });
};

angular.module("app", ["ngRoute"]).config(config);

conduitLayoutFooter()
conduitLayoutHeader()
conduitButtonsFavorite()
conduitArticlesMeta()
conduitArticlesPreview()
conduitArticlesListItem()
conduitArticlesList()
conduitArticlesFeeds()
conduitTagsPopular()
conduitPagesHome()