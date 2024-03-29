import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.articles.list", [])
    .component("conduitArticlesList", {
      template: dependencies.template || template,
      bindings: {
        articles: "<",
      },
    });
