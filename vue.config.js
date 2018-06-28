module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-walk-through/'
        : '/',

    outputDir: 'docs'
};