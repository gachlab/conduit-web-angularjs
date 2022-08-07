import conduitArticlesDetailsBanner from "../components/conduit-articles-details-banner";
import conduitArticlesDetailsContent from "../components/conduit-articles-details-content";

import template from "./template.html";
import { init } from "./service";
import conduitArticlesDetailsComments from "../components/conduit-articles-details-comments";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.pages.articles.details", [
      dependencies.conduitArticlesDetailsBanner ||
        conduitArticlesDetailsBanner({
          angular,
        }).name,
      dependencies.conduitArticlesDetailsContent ||
        conduitArticlesDetailsContent({
          angular,
        }).name,
      dependencies.conduitArticlesDetailsComments ||
        conduitArticlesDetailsComments({
          angular,
        }).name,
    ])
    .component("conduitPagesArticlesDetails", {
      template: dependencies.template || template,
      controller: controller(dependencies),
    });

function controller(dependencies) {
  return function ($q) {
    const ctrl = this;
    const state = {};
    ctrl.state = state;
    ctrl.$onInit = onInit;

    function onInit() {
      $q((resolve, reject) =>
        (dependencies.init || init())()
          .then((state) => resolve(state))
          .catch(reject)
      )
        .then((state) => setState(state))
        .catch(console.error);
    }

    function setState(input) {
      Object.keys(input).forEach(
        (property) => (state[property] = input[property])
      );
    }
  };
}
