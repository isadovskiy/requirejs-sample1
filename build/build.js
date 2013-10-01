({
    appDir: '../src',
    dir: '../www',
    mainConfigFile: '../src/js/sample/config.js',
    baseUrl: '.',
    modules: [
        {
            name: 'js/sample/app',
            exclude: [
                'jquery'
            ]
        }
    ],
    findNestedDependencies: false,
    optimize: 'none',
    skipDirOptimize: true,
    generateSourceMaps: false,
	removeCombined: false,
    preserveLicenseComments: false
})
