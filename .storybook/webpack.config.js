const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.plugins.push(
        new VueLoaderPlugin(),
    );

    return defaultConfig;
};