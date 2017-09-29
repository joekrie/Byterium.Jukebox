const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

exports.paths = {
    public: 'wwwroot',
    watched: ['js', 'css']
};

exports.files = {
    javascripts: {
        joinTo: 'app.js'
    },
    stylesheets: {
        joinTo: 'app.css'
    }
}

exports.plugins = {
    babel: {
        presets: [
            'react',
            [
                'env',
                {
                    targets: {
                        browsers: '> 2%'
                    }
                }
            ]
        ]
    },
    postcss: {
        processors: [
            autoprefixer,
            postcssImport
        ]
    }
}
