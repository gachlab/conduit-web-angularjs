import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.articles.feeds", [])
    .component("conduitArticlesFeeds", {
      template: dependencies.template || template,
      bindings: {
        feeds: "<",
        onSelected: "<",
      },
    });
