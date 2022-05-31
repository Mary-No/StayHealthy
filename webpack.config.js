const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    module: {

        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [miniCss.loader, "css-loader"],
            }
        ]
    },

    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};