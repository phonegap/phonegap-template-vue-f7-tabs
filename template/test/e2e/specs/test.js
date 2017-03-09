// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
let devServer;

module.exports = {
  before: (browser) => {
    console.log('Setting up...');
    devServer = browser.globals.devServerURL;
  },
  'main view': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#main-view');
  },
  'nav bar': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.navbar-inner .center', 5000)
      .assert.containsText('.navbar-inner .center', 'Home');
  },
  'content block title': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.page-content .content-block-title', 5000)
      .assert.containsText('.page-content .content-block-title', 'Home Page');
  },
  'content block': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.page-content .content-block .content-block-inner', 5000)
      .assert.containsText('.page-content .content-block .content-block-inner', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est aliquam officiis quaerat placeat, cum explicabo magni soluta totam maxime autem minima accusamus eos suscipit dignissimos corporis modi voluptatum fugiat!');
  },
  'tab bar': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.tabbar', 5000)
      .assert.containsText('.tabbar a[data-tab="#home"]', 'HOME')
      .assert.containsText('.tabbar a[data-tab="#about"]', 'ABOUT')
      .assert.containsText('.tabbar a[data-tab="#services"]', 'SERVICES')
      .end();
  },
};
