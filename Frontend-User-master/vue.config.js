const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '',
    configureWebpack: {
        plugins: [
            new CompressionPlugin(),
            new SWPrecacheWebpackPlugin({
                cacheId: 'security4all',
                filename: 'service-worker.js',
                staticFileGlobs: ['dist/**/*.{js,html,css,woff,woff2,eot,ttf,png,jpg,jpeg,ico,svg,json}'],
                minify: true,
                stripPrefix: 'dist/',
                navigateFallback: 'index.html',
            })
        ]
    }
};
