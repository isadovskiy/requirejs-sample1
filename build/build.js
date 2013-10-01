({
    appDir: '../src',
    dir: '../www',
    mainConfigFile: '../src/sample/config.js',
    baseUrl: '.',
    modules: [
        {
            name: 'sample/app',
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
