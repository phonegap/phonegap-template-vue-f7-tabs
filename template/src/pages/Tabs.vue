<template>
  <f7-page tabbar-fixed with-subnavbar>
    <f7-navbar title="Home" sliding />

    <!-- iOS TabBar has icons, Material TabBar does not -->
    <f7-toolbar tabbar :labels="isiOS">
        <f7-link :icon-f7="isiOS ? 'home' : ''" text="Home" tab-link="#home" active></f7-link>
        <f7-link :icon-f7="isiOS ? 'info' : ''" text="About" tab-link="#about"></f7-link>
        <f7-link :icon-f7="isiOS ? 'persons' : ''" text="Services" tab-link="#services"></f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="home" tab-active>
        <home-page />
      </f7-tab>
      <f7-tab id="about">
        <about-page />
      </f7-tab>
      <f7-tab id="services">
        <services-page />
      </f7-tab>
    </f7-tabs>

  </f7-page>
</template>

<script>
import Home from './Home';
import About from './About';
import Services from './Services';

export default {
  name: 'Tabs',
  components: {
    'home-page': Home,
    'about-page': About,
    'services-page': Services
  },
  computed: {
    isiOS() {
      return this.$theme.ios;
    },
    isMaterial() {
      return this.$theme.material;
    }
  }
};
</script>
