define(['require'], function (require) {

    return {

        pluginBuilder: './plugin-builder-1',

        load: function (name, req, load, config) {
            require(['./plugin-dependency'], function (dependency) {
                load(dependency.value);
            });
        }

    };

});