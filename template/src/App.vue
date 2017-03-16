<template>
  <!-- App -->
  <div id="app" :class="platformClass">

    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar />

    <!-- Views-->
    <f7-views toolbar-through>
      <!-- Right view, it is main view-->
      <f7-view url="/" :init="true" id="main-view" :dynamic-navbar="true" navbar-through main>
        <f7-navbar v-if="isiOS" sliding title="Home"></f7-navbar>
        <!-- Pages (replaced by router ) -->
        <f7-pages />
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      isiOS () {
        return window.isiOS;
      },
      platformClass () {
        return window.isiOS ? 'ios' : 'material';
      }
    }
  };
</script>
