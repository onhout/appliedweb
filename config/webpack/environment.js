const {environment} = require('@rails/webpacker');
const webpack = require('webpack');

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery',
        jquery: 'jquery',
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'], // for Bootstrap 4
    })
)

environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader'
});

module.exports = environment;
