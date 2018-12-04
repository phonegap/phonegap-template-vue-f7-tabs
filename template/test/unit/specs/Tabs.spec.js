import Vue from 'vue'; // eslint-disable-line no-unused-vars
// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

import Tabs from '@/pages/tabs';

// Init F7 Vue Plugin
//Framework7.use(Framework7Vue);

// vm will be useful in some tests... but as it is not used in these examples,
//   we have to get the linter to leave us alone.
let vm; // eslint-disable-line no-unused-vars

describe('Tabs.vue', () => {
  beforeEach(() => {
    vm = new Vue({
      // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(Tabs)
    });
  });

  it('should have a name of "Tabs"', () => {
    expect(Tabs.name).to.equal('Tabs');
  });
});
