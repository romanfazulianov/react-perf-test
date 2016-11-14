"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProductionMode = NODE_ENV === 'production';
const isDebugMode = NODE_ENV === 'development';
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: [
        'babel-polyfill',
        './app/react/App.js'
    ],
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    watch: isDebugMode,
    watchOptions: {
        aggregateTimeout: 50
    },
    devtool: isDebugMode ? 'inline-cheap-module-source-map' : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
    ]
};

if (isDebugMode) {
    config.plugins.push(
        new BrowserSyncPlugin({
            proxy: 'localhost:3100',
            host: 'localhost',
            port: 3000,
        })
    );
}

if (isProductionMode) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences   : true,
                booleans    : true,
                loops       : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    );
}

module.exports = config;

