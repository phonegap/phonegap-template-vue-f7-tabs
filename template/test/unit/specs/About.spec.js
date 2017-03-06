import Vue from 'vue'; // eslint-disable-line no-unused-vars
// Import F7
import Framework7 from 'framework7'; // eslint-disable-line no-unused-vars

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

import About from 'src/components/pages/About';

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

let vm;

describe('About.vue', () => {
  beforeEach(() => {
    vm = new Vue({ // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(About),
      // Init Framework7 by passing parameters here
      // The absolute minimum is an empty routes array
      framework7: {
        routes: [],
      },
    });
  });

  it('should have a name of "About"', () => {
    expect(About.name).to.equal('About');
  });

  describe('Data', () => {
    it('should have a data method', () => {
      expect(About.data).to.be.a('function');
    });
    it('should have a data method that returns a title of "About Page"', () => {
      expect(About.data().title).to.equal('About Page');
    });
    it('should have a content-block-title that displays `data().title`', () => {
      expect(vm.$el.querySelector('.content-block-title').textContent)
        .to.equal(About.data().title);
    });
  });
});
