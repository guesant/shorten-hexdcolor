const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const { PuppeteerRenderer } = PrerenderSPAPlugin;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
        renderer: new PuppeteerRenderer({
          renderAfterDocumentEvent: 'render-event',
        }),
      }),
    ],
  },
};
