export default function (dependencies) {
    const module = dependencies.angular.module('conduit.components.layout.banner', [])
    module.component('conduitLayoutBanner', {
        template: dependencies.template,
    });
    return module
};
