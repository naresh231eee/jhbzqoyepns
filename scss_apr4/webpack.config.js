var config = {
    entry: './page/main.jsx',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8070
    },
    resolve: {
        extensions: ['', '.css', '.scss', '.js', '.json', '.sass'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },

        ]
    }
}

module.exports = config;