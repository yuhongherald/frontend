const path = require('path');
var webpack = require('webpack');
require('dotenv').config();

module.exports = {
    // the entry file for the bundle
    entry: path.join(__dirname, '/client/src/app.jsx'),

    // the bundle file we will get in the result
    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js',
    },
    node:{
        fs: "empty"
    },
    module: {

        // apply loaders to files that meet given conditions
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, '/client/src'),
            loader: 'babel-loader',
            query: {
                presets: ["react", "es2015"]
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'FACEBOOK_APP_ID': JSON.stringify(process.env.FACEBOOK_APP_ID),
            'GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID)
        }
    })],

    // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: true
};
