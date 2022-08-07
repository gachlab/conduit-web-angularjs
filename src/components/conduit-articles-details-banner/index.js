import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.articles.details.banner", [])
    .component("conduitArticlesDetailsBanner", {
      template: dependencies.template || template,
    });
