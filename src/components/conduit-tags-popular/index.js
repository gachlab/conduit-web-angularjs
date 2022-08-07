export default (dependencies) =>
  dependencies.angular
    .module("conduit.components.tags.popular", [])
    .component("conduitTagsPopular", {
      template: dependencies.template,
      bindings: {
        tags: "<",
        onSelected: "<",
      },
    });
