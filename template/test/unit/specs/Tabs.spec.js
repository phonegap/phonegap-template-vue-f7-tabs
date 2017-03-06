import Vue from 'vue'; // eslint-disable-line no-unused-vars
// Import F7
import Framework7 from 'framework7'; // eslint-disable-line no-unused-vars

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

import Tabs from 'src/components/pages/Tabs';

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

let vm;

describe('Tabs.vue', () => {
  beforeEach(() => {
    vm = new Vue({ // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(Tabs),
      // Init Framework7 by passing parameters here
      // The absolute minimum is an empty routes array
      framework7: {
        routes: [],
      },
    });
  });

  it('should have a name of "Tabs"', () => {
    expect(Tabs.name).to.equal('Tabs');
  });

  describe('Computed', () => {
    it('should return a computed property for the global `isiOS`', () => {
      window.isiOS = true;
      expect(Tabs.computed.isiOS()).to.equal(true);
    });
    it('should return a computed property for the global `isMaterial`', () => {
      window.isMaterial = true;
      expect(Tabs.computed.isMaterial()).to.equal(true);
    });
  });
});
