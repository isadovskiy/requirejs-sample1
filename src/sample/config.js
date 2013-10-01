requirejs({
    paths: {
        'jquery': 'lib/jquery-1.10.1/jquery.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});
