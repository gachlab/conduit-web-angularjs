import template from "./template.html";

export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.layout.footer", [])
    .component("conduitLayoutFooter", {
      template: dependencies.template || template,
    });
