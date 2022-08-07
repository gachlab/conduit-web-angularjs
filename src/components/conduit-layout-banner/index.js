import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.layout.banner", [])
    .component("conduitLayoutBanner", {
      template: dependencies.template || template,
    });
