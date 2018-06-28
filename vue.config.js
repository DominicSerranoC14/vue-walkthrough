module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-walkthrough/'
        : '/',

    outputDir: 'docs'
};