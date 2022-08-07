import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.layout.header", [])
    .component("conduitLayoutHeader", {
      bindings: {
        current: "<",
      },
      template: dependencies.template || template,
    });
