requirejs.config({
    paths: {
        "underscore": "libs/underscore/underscore",
        "jquery": "libs/jquery/jquery"
    },
    shim: {
        "underscore": {
            exports: "_"
        }
    },
    packages: [
        "app"
    ]
});