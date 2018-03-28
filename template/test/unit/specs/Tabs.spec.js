import Vue from 'vue'; // eslint-disable-line no-unused-vars
// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

import Tabs from '@/pages/tabs';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

// vm will be useful in some tests... but as it is not used in these examples,
//   we have to get the linter to leave us alone.
let vm; // eslint-disable-line no-unused-vars

describe('Tabs.vue', () => {
  beforeEach(() => {
    vm = new Vue({
      // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(Tabs),
      // Init Framework7 by passing parameters here
      // The absolute minimum is an empty routes array
      framework7: {
        routes: []
      }
    });
  });

  it('should have a name of "Tabs"', () => {
    expect(Tabs.name).to.equal('Tabs');
  });
});
