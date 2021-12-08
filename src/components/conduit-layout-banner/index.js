export default function (dependencies) {
    return dependencies.angular
        .module('conduit.components.layout.banner', [])
        .component('conduitLayoutBanner', {
            template: dependencies.template,
        });
};
