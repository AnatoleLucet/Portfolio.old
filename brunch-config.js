exports.files = {
    javascripts: {
        joinTo: {
            'js/app.js': /^app/,
            'js/vendor.js': /^(?!app)/,
        }
    },
    stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
    sass: {
        options: {
            includePaths: ['node_modules/font-awesome/scss']
        }
    },
    browserSync: {
        files: [
            '*'
        ]
    },
    copycat: {
        'fonts': ['node_modules/font-awesome/fonts']
    }
};

exports.npm = {
    enabled: true,
    styles: {
        'font-awesome': ['css/font-awesome.css']
    },
    globals: {
        '$': 'jquery',
        'jQuery': 'jquery'
    }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['initialize']
  }
};
