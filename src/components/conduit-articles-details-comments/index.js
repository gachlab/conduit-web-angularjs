import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.articles.details.comments", [])
    .component("conduitArticlesDetailsComments", {
      template: dependencies.template || template,
    });
