import conduitPageBanner from "../components/conduit-layout-banner";
import conduitTagsPopular from "../components/conduit-tags-popular";
import conduitArticlesFeeds from "../components/conduit-articles-feeds";
import conduitArticlesList from "../components/conduit-articles-list";

import {
  init as serviceOnInit,
  onFeedSelected as serviceOnFeedSelected,
  onTagSelected as serviceOnTagSelected,
} from "./service";

import { listArticles } from "../conduit-api-lib/articles";
import { listTags } from "../conduit-api-lib/tags";

import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.pages.home", [
      conduitPageBanner({
        angular,
      }).name,

      conduitTagsPopular({
        angular,
      }).name,
      conduitArticlesList({
        angular,
      }).name,
      conduitArticlesFeeds({
        angular,
      }).name,
    ])
    .component("conduitPagesHome", {
      template: dependencies.template || template,
      controller: controller(dependencies),
    });

function controller(dependencies) {
  return function ($q) {
    const ctrl = this;
    const state = {};
    ctrl.state = state;
    ctrl.$onInit = onInit;
    ctrl.onFeedSelected = onFeedSelected;
    ctrl.onTagSelected = onTagSelected;
    ctrl.setState = setState;

    function onInit() {
      $q((resolve, reject) =>
        (dependencies.init || serviceOnInit({ listArticles, listTags }))()
          .then((state) => resolve(state))
          .catch(reject)
      )
        .then((state) => setState(state))
        .catch(console.error);
    }

    function onFeedSelected(feed) {
      return (
        dependencies.onFeedSelected || serviceOnFeedSelected({ listArticles })
      )({
        state,
        feed,
      }).then(setState);
    }

    function onTagSelected(tag) {
      return (
        dependencies.onTagSelected || serviceOnTagSelected({ listArticles })
      )({
        state,
        tag,
      }).then(setState);
    }

    function setState(input) {
      Object.keys(input).forEach(
        (property) => (state[property] = input[property])
      );
    }
  };
}
