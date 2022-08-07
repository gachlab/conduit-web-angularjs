import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.articles.details.content", [])
    .component("conduitArticlesDetailsContent", {
      template: dependencies.template || template,
    });
