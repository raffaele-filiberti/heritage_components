const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.

    // For example, add typescript loader:
    defaultConfig.module.rules.push({
        test: /\.scss$/,
        loaders: [
            {
                loader: 'style-loader',
                options: {
                    sourceMap: true,
                }
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    minimize: true,
                    sourceMap: true,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                }
            },
        ],
        include: path.resolve(__dirname, "../")
    });
    defaultConfig.resolve.extensions.push(".scss");

    return defaultConfig;
};

/*
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                minimize: true,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
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
                }),
                include: path.resolve(__dirname, "../")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './public/style.min.css'
        })
    ]
};*/
