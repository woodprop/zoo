const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test:/\.scss$/,
            use: [
                {
                    loader: miniCss.loader,
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                },
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ],
    devtool: 'source-map',
};