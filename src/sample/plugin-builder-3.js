define([], function () {

    var buildMap = {};

    return {

        load: function (name, req, load, config) {
            // use global require function
            require(['sample/plugin-dependency'], function (dependency) { // fails silently (in the same way like in plugin-builder-1)
                buildMap[name] = dependency.value;
                load();
            });
        },

        write: function (pluginName, moduleName, write) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = buildMap[moduleName];
                write('define("' + pluginName + '!' + moduleName + '", [], function () { return "' + content + '"; });\n');
            }
        }

    };

});