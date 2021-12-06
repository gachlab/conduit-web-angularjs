import angular from 'angular'

import conduitPagesHome from './conduit-pages-home';
import conduitPagesHomeTemplate from './conduit-pages-home/template.html';
import { init, onTagSelected, onFeedSelected } from './conduit-pages-home/service'

import conduitPageBanner from './components/conduit-page-banner'
import conduitPageBannerTemplate from './components/conduit-page-banner/template.html'

import conduitTagsPopular from './components/conduit-tags-popular'
import conduitTagsPopularTemplate from './components/conduit-tags-popular/template.html'

import conduitArticlesFeeds from './components/conduit-articles-feeds';
import conduitArticlesFeedsTemplate from './components/conduit-articles-feeds/template.html';

import conduitArticlesList from './components/conduit-articles-list';
import conduitArticlesListTemplate from './components/conduit-articles-list/template.html';

import conduitArticlesListItem from './components/conduit-articles-list-item';
import conduitArticlesListItemTemplate from './components/conduit-articles-list-item/template.html';

import conduitArticlesPreview from './components/conduit-articles-preview';
import conduitArticlesPreviewTemplate from './components/conduit-articles-preview/template.html';


import conduitArticlesMeta from './components/conduit-articles-meta';
import conduitArticlesMetaTemplate from './components/conduit-articles-meta/template.html'

import conduitButtonsFavorite from './components/conduit-buttons-favorite';
import conduitButtonsFavoriteTemplate from './components/conduit-buttons-favorite/template.html'

import conduitLayoutFooter from './components/conduit-layout-footer';
import conduitLayoutFooterTemplate from './components/conduit-layout-footer/template.html'

import conduitLayoutHeader from './components/conduit-layout-header';
import conduitLayoutHeaderTemplate from './components/conduit-layout-header/template.html'

const config = function ($routeProvider) {
  $routeProvider.when("/", {
    template: "<conduit-pages-home></conduit-pages-home>",
  });
};

const angularModule = angular.module("conduit", ["ngRoute"]).config(config);


conduitLayoutFooter({
  angularModule,
  template: conduitLayoutFooterTemplate
})

conduitLayoutHeader({
  angularModule,
  template: conduitLayoutHeaderTemplate
})

conduitButtonsFavorite({
  angularModule,
  template: conduitButtonsFavoriteTemplate
})

conduitArticlesMeta({
  angularModule,
  template: conduitArticlesMetaTemplate
})

conduitArticlesPreview({
  angularModule,
  template: conduitArticlesPreviewTemplate
})

conduitArticlesListItem({
  angularModule,
  template: conduitArticlesListItemTemplate
})

conduitArticlesList({
  angularModule,
  template: conduitArticlesListTemplate
})

conduitArticlesFeeds({
  angularModule,
  template: conduitArticlesFeedsTemplate
})

conduitTagsPopular({
  angularModule,
  template: conduitTagsPopularTemplate
})

conduitPageBanner({
  angularModule,
  template: conduitPageBannerTemplate
})

conduitPagesHome({
  angularModule,
  template: conduitPagesHomeTemplate,
  init,
  onTagSelected,
  onFeedSelected
})

