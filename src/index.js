import angular from 'angular'

import conduitPagesHome from './conduit-pages-home';
import conduitPagesHomeTemplate from './conduit-pages-home/template.html';
import { init, onTagSelected, onFeedSelected } from './conduit-pages-home/service'

import conduitPageBanner from './components/conduit-layout-banner'
import conduitPageBannerTemplate from './components/conduit-layout-banner/template.html'

import conduitTagsPopular from './components/conduit-tags-popular'
import conduitTagsPopularTemplate from './components/conduit-tags-popular/template.html'

import conduitArticlesFeeds from './components/conduit-articles-feeds';
import conduitArticlesFeedsTemplate from './components/conduit-articles-feeds/template.html';

import conduitArticlesList from './components/conduit-articles-list';
import conduitArticlesListTemplate from './components/conduit-articles-list/template.html';

import conduitLayoutFooter from './components/conduit-layout-footer';
import conduitLayoutFooterTemplate from './components/conduit-layout-footer/template.html'

import conduitLayoutHeader from './components/conduit-layout-header';
import conduitLayoutHeaderTemplate from './components/conduit-layout-header/template.html'

const modules = [
  conduitLayoutHeader({
    angular,
    template: conduitLayoutHeaderTemplate
  }).name,
  conduitPageBanner({
    angular,
    template: conduitPageBannerTemplate
  }).name,
  conduitLayoutFooter({
    angular,
    template: conduitLayoutFooterTemplate
  }).name,
  conduitPagesHome({
    angular,
    template: conduitPagesHomeTemplate,
    init,
    onTagSelected,
    onFeedSelected
  }).name,
  conduitTagsPopular({
    angular,
    template: conduitTagsPopularTemplate
  }).name,

  conduitArticlesList({
    angular,
    template: conduitArticlesListTemplate
  }).name,

  conduitArticlesFeeds({
    angular,
    template: conduitArticlesFeedsTemplate
  }).name,
]

const config = function ($routeProvider) {
  $routeProvider.when("/", {
    template: "<conduit-pages-home></conduit-pages-home>",
  });
};

angular.module("conduit", ["ngRoute"].concat(modules)).config(config);
