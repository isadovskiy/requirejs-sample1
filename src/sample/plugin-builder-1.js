define(['require'], function (require) {

    var buildMap = {};

    return {

        load: function (name, req, load, config) {
            //req(['./plugin-dependency'], function (dependency) { // gives "Error: TypeError: Cannot read property 'value' of undefined"
            require(['./plugin-dependency'], function (dependency) { // fails silently
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