const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const config = require('./config');

const JS_DEV = path.resolve(config.root.dev, config.js.dev);
const JS_DIST = path.resolve(config.root.dist, config.js.dist);

const mainEntries = Object.assign(
    {},
    ...glob.sync('assets/_src/js/*.js').map((file) => {
        if (file.length > 0) {
            const arr = file.split('/');
            const fileName = arr[arr.length - 1];
            return { [fileName]: `./${file}` };
        }
    }),
);

const webpackConfig = {
    mode: config.production ? 'production' : 'development',
    watch: !config.production,
    optimization: {
        minimize: config.production,
    },
    name: 'main',
    entry: mainEntries,
    output: {
        path: JS_DIST,
        filename: '[name]',
        publicPath: config.production ? '' : config.browserSync.proxy.publicPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        modules: [
            JS_DEV,
            'node_modules',
        ],
        extensions: ['.js', '.json'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],

    externals: {
        jquery: 'jQuery',
    },
};

/** Modifies webpackConfig depends on mode. */
if (config.production) {
    webpackConfig.plugins.push(
        new webpack.NoEmitOnErrorsPlugin(),
    );
} else {
    webpackConfig.devtool = 'inline-source-map';
    // webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
    // webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}
if (!config.production) {
    if (config.js.notifyShow) {
        webpackConfig.plugins.push(
            new WebpackBuildNotifierPlugin({
                title: 'DSMP Project',
                suppressSuccess: true, // don't spam success notifications
                time: 500,
                successSound: config.js.notifySound,
                failureSound: config.js.notifySoundWarn,
            }),
        );
    }
}

module.exports = webpackConfig;
