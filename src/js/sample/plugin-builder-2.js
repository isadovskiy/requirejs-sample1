define(['./plugin-dependency'], function (dependency) {

    var buildMap = {};

    return {

        load: function (name, req, load, config) {
            buildMap[name] = dependency.value;
            load();
        },

        write: function (pluginName, moduleName, write) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = buildMap[moduleName];
                write('define("' + pluginName + '!' + moduleName + '", [], function () { return "' + content + '"; });\n');
            }
        }

    };

});