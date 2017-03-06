<template>
  <f7-page with-subnavbar>
    <f7-navbar title="Home" sliding />

    <!-- iOS TabBar has icons -->
    <f7-toolbar v-if="isiOS" tabbar labels>
      <f7-link icon-f7="home" text="Home" tab-link="#home" active></f7-link>
      <f7-link icon-f7="info" text="About" tab-link="#about"></f7-link>
      <f7-link icon-f7="persons" text="Services" tab-link="#services"></f7-link>
    </f7-toolbar>
    <!-- Material TabBar does not -->
    <f7-toolbar v-if="isMaterial" tabbar>
      <f7-link text="Home" tab-link="#home" active></f7-link>
      <f7-link text="About" tab-link="#about"></f7-link>
      <f7-link text="Services" tab-link="#services"></f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="home" active>
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
      'services-page': Services,
    },
    computed: {
      isiOS() {
        return window.isiOS;
      },
      isMaterial() {
        return window.isMaterial;
      },
    },
  };
</script>
