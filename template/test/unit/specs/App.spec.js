/* eslint-disable no-unused-vars */

import Vue from 'vue';
// Import F7
import Framework7 from 'framework7';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

import App from 'src/App';

let vm;

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

describe('App.vue', () => {
  beforeEach(() => {
    vm = new Vue({ // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(App),
      // Init Framework7 by passing parameters here
      // The absolute minimum is an empty routes array
      framework7: {
        routes: [],
      },
    });
  });

  describe('Computed', () => {
    it('should return a computed property for the global `isiOS`', () => {
      window.isiOS = true;
      expect(App.computed.isiOS()).to.equal(window.isiOS);
    });
    it('should return a computed property for platformClass that matches the platform', () => {
      window.isiOS = true;
      window.isMaterial = false;
      expect(App.computed.platformClass()).to.equal('ios');
      window.isiOS = false;
      window.isMaterial = true;
      expect(App.computed.platformClass()).to.equal('material');
    });
  });
});
